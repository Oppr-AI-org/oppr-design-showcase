import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { apiClient } from "@/lib/api-client"; // Import your apiClient

interface AuthUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  birthdate: string;
  company: string;
  role: string;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  logout: () => Promise<void>;
  session: { user: AuthUser } | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
  session: null,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [, navigate] = useLocation();

  const refreshToken = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    if (!refresh_token) {
      throw new Error("No refresh token");
    }

    // Use apiClient instead of direct fetch calls
    const response = await apiClient("/auth/refresh", {
      method: "POST",
      skipAuth: true, // No authorization needed for refresh
      body: JSON.stringify({ refresh_token }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    return data.access_token;
  };

  const getUser = async () => {
    try {
      // Use apiClient for authenticated request
      const response = await apiClient("/auth/me", {
        skipAuth: false, // Use authorization
      });

      if (!response.ok) throw new Error("Failed to get user data");
      return response.json();
    } catch (error) {
      // If there's an error, apiClient will already handle token refresh attempts
      // and token clearing if needed, so we don't need that logic here anymore
      throw error;
    }
  };

  const logout = async () => {
    try {
      const refresh_token = localStorage.getItem("refresh_token");

      if (refresh_token) {
        // Use apiClient for the logout request
        await apiClient("/auth/logout", {
          method: "POST",
          body: JSON.stringify({ refresh_token }),
        });
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setUser(null);
      // Use direct navigation for more reliability
      window.location.href = "/auth";
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userData = await getUser();
        setUser(userData);

        // Check if we need to redirect from auth page
        if (window.location.pathname === "/auth" && userData) {
          navigate("/");
        }
      } catch (error) {
        console.log("Authentication error:", error);
        // Only redirect to auth if not already there and we're not loading
        if (window.location.pathname !== "/auth") {
          navigate("/auth");
        }
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [navigate]);

  // Create a session object that mimics the structure expected by other components
  const session = user ? { user } : null;

  return (
    <AuthContext.Provider value={{ user, loading, logout, session }}>
      {children}
    </AuthContext.Provider>
  );
};

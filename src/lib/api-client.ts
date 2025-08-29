// Mock API client for showcase purposes
// This would normally contain the actual API client implementation

export const apiClient = {
  auth: {
    login: async (email: string, password: string) => {
      // Mock login - always returns success for demo
      return Promise.resolve({
        user: {
          id: '1',
          email,
          first_name: 'Demo',
          last_name: 'User',
        },
        token: 'mock-token'
      })
    },
    logout: async () => {
      // Mock logout
      return Promise.resolve()
    },
    getCurrentUser: async () => {
      // Mock current user - for demo purposes
      return Promise.resolve({
        id: '1',
        email: 'demo@example.com',
        first_name: 'Demo',
        last_name: 'User',
      })
    }
  }
}


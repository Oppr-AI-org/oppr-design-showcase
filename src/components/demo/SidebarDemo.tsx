import {
  Home,
  FileText,
  Settings,
  QrCode,
  Factory,
  BookOpen,
  Database,
  Calendar,
  FolderKanban,
  CircleUser,
  UserCog,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Projects", icon: FolderKanban, path: "/projects" },
  { title: "Analytics", icon: TrendingUp, path: "/analytics" },
  {
    title: "Resources",
    icon: BookOpen,
    subItems: [
      { title: "Documents", icon: FileText, path: "/documents" },
      { title: "Templates", icon: Settings, path: "/templates" },
      { title: "Data Sources", icon: Database, path: "/data" },
      { title: "Media Library", icon: Factory, path: "/media" },
      { title: "Assets", icon: QrCode, path: "/assets" },
    ],
  },
  { title: "Calendar", icon: Calendar, path: "/calendar" },
  { title: "Team", icon: CircleUser, path: "/team" },
  { title: "Settings", icon: UserCog, path: "/settings" },
];

export function SidebarDemo() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Resources"]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Oppr Logs Sidebar</h3>
        <p className="text-muted-foreground mb-8">
          Interactive navigation with nested menu items used throughout
          Oppr Logs
        </p>
      </div>

      <div className="flex h-[600px] border rounded-lg overflow-hidden shadow-md shadow-black/10">
        {/* Mock sidebar without SidebarProvider context */}
        <div className="w-64 bg-sidebar border-r border-sidebar-border">
          <div className="flex h-full w-full flex-col">
            {/* Logo Header */}
            <div className="p-4 border-b border-sidebar-border">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Oppr Logo" className="h-8 w-8" />
                <span className="font-semibold text-sidebar-foreground">
                  Oppr Logs
                </span>
              </div>
            </div>

            {/* Menu Section */}
            <div className="flex flex-col gap-2 p-2">
              <div className="px-2 py-1">
                <span className="text-xs font-medium text-sidebar-foreground/70">
                  Menu
                </span>
              </div>
              <div className="flex w-full min-w-0 flex-col gap-1">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleExpanded(item.title)}
                          className="flex w-full items-center justify-between gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground text-sidebar-foreground"
                        >
                          <div className="flex items-center gap-2 text-sidebar-foreground">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform text-sidebar-foreground ${
                              expandedItems.includes(item.title)
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                        {expandedItems.includes(item.title) && (
                          <div className="ml-6 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.title}
                                className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground text-sidebar-foreground"
                              >
                                <subItem.icon className="h-3 w-3" />
                                <span>{subItem.title}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground text-sidebar-foreground">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-background">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Main Content Area</h4>
            <p className="text-muted-foreground">
              This would be where the main application content appears when a
              menu item is selected.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Project Overview</h5>
                <p className="text-sm text-muted-foreground">
                  Quick stats and recent activity
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Recent Logs</h5>
                <p className="text-sm text-muted-foreground">
                  Latest log entries and updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

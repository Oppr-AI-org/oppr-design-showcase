import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Settings, 
  ExternalLink,
  Building2,
  Users,
  FileText,
  Calendar,
  QrCode,
  Camera,
  Table
} from 'lucide-react'

export function PatternsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Design Patterns</h3>
        <p className="text-muted-foreground mb-8">
          Specific design patterns and conventions used in Oppr Logs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Top Bar Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>Top Bar Pattern</CardTitle>
            <CardDescription>Standard application header with user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-14 bg-white border rounded-lg flex items-center justify-between px-6">
              <h1 className="text-lg font-semibold text-gray-900">Log Manager</h1>
              <div className="flex items-center gap-6">
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 ring-2 ring-primary/10">
                    <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-700">john.doe</span>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Feature Icons</CardTitle>
            <CardDescription>Consistent iconography throughout the application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {[
                { icon: Building2, label: "Projects" },
                { icon: Users, label: "Members" },
                { icon: FileText, label: "Logs" },
                { icon: Calendar, label: "Schedule" },
                { icon: QrCode, label: "QR Codes" },
                { icon: Camera, label: "Photos" },
                { icon: Table, label: "Data" },
                { icon: Settings, label: "Settings" }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Icon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-xs text-center">{label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Design system color tokens</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-lg"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">Main brand color</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-secondary rounded-lg"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">Supporting color</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-muted rounded-lg"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-muted-foreground">Subtle backgrounds</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent rounded-lg"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">Highlight color</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


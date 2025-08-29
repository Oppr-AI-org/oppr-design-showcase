import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from 'lucide-react'

export function ChartsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
        <p className="text-muted-foreground mb-8">
          Charts and data visualization components used in Oppr Logs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Chart Placeholder</CardTitle>
            <CardDescription>Recharts integration for data visualization</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">Chart components available</p>
              <p className="text-sm text-muted-foreground">Line, Bar, Pie, Scatter, Heatmap</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stats Cards</CardTitle>
            <CardDescription>Key metrics and statistics display</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Total Logs</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


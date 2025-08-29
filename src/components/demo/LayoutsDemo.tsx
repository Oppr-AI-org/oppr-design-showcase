import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Eye, 
  Edit, 
  Trash2, 
  Users,
  Activity,
  Clock,
  ExternalLink
} from 'lucide-react'

export function LayoutsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Layout Patterns</h3>
        <p className="text-muted-foreground mb-8">
          Common layout patterns and structures from Oppr Logs
        </p>
      </div>

      {/* Project Card Layout */}
      <Card>
        <CardHeader>
          <CardTitle>Project Card Layout</CardTitle>
          <CardDescription>The signature project card design from Oppr Logs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="min-w-[300px] h-[380px] hover:border-primary/20 transition-all duration-200 hover:shadow-md flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-lg font-medium">
                    Sample Project {i}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" title="View Project">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Manage Members">
                      <Users className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Edit Project">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Delete Project">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      This is a sample project description that shows how the card layout works.
                    </p>

                    <div className="space-y-3 mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="h-3 w-3" />
                          <span className="text-xs font-medium">Runtime Status</span>
                        </div>
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Total Runtime</span>
                        </div>
                        <span className="font-medium">2h 45m</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Round Progress</span>
                          <span>{65 + i * 10}%</span>
                        </div>
                        <Progress value={65 + i * 10} className="h-1" />
                      </div>
                    </div>

                    <div className="flex-1"></div>
                  </div>

                  <div className="pt-4 border-t border-border/40 mt-4">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{3 + i} members</span>
                      </div>
                      <span>Updated Dec {10 + i}, 2024</span>
                    </div>

                    <Button size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Project Context
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


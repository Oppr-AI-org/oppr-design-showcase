import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, TrendingUp, Download } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts'

// Sample data that represents typical Oppr Logs metrics
const projectProgressData = [
  { month: 'Jan', completed: 65, planned: 80, efficiency: 81 },
  { month: 'Feb', completed: 78, planned: 85, efficiency: 92 },
  { month: 'Mar', completed: 82, planned: 90, efficiency: 91 },
  { month: 'Apr', completed: 95, planned: 100, efficiency: 95 },
  { month: 'May', completed: 88, planned: 95, efficiency: 93 },
  { month: 'Jun', completed: 92, planned: 98, efficiency: 94 },
]

const logCategoryData = [
  { name: 'Quality Control', value: 35, color: '#9b87f5' },
  { name: 'Safety Checks', value: 28, color: '#7E69AB' },
  { name: 'Maintenance', value: 22, color: '#D6BCFA' },
  { name: 'Production', value: 15, color: '#F1F0FB' },
]

const dailyActivityData = [
  { time: '08:00', logs: 12, users: 8 },
  { time: '10:00', logs: 25, users: 15 },
  { time: '12:00', logs: 18, users: 12 },
  { time: '14:00', logs: 32, users: 20 },
  { time: '16:00', logs: 28, users: 18 },
  { time: '18:00', logs: 15, users: 10 },
]

const performanceData = [
  { efficiency: 85, quality: 92 },
  { efficiency: 88, quality: 89 },
  { efficiency: 92, quality: 95 },
  { efficiency: 78, quality: 88 },
  { efficiency: 95, quality: 97 },
  { efficiency: 89, quality: 91 },
  { efficiency: 93, quality: 94 },
]

export function ChartsEnhancedDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
        <p className="text-muted-foreground mb-8">
          Interactive charts and data visualization components used throughout Oppr Logs for analytics and reporting
        </p>
      </div>

      {/* Chart Types Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Chart Components</CardTitle>
          <CardDescription>Various chart types available in the Oppr Logs design system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: LineChartIcon, name: "Line Charts", desc: "Trends over time" },
              { icon: BarChart3, name: "Bar Charts", desc: "Comparative data" },
              { icon: PieChartIcon, name: "Pie Charts", desc: "Proportional data" },
              { icon: TrendingUp, name: "Scatter Plots", desc: "Correlation analysis" }
            ].map((chart) => (
              <div key={chart.name} className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <chart.icon className="h-8 w-8 text-primary" />
                <span className="font-medium text-sm">{chart.name}</span>
                <span className="text-xs text-muted-foreground text-center">{chart.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Progress Line Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <LineChartIcon className="h-5 w-5 text-primary" />
                Project Progress
              </CardTitle>
              <CardDescription>Monthly completion rates and efficiency metrics</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700">+12% vs last period</Badge>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#9b87f5" strokeWidth={3} dot={{ fill: '#9b87f5', strokeWidth: 2, r: 4 }} name="Completed" />
                <Line type="monotone" dataKey="planned" stroke="#7E69AB" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#7E69AB', strokeWidth: 2, r: 4 }} name="Planned" />
                <Line type="monotone" dataKey="efficiency" stroke="#D6BCFA" strokeWidth={2} dot={{ fill: '#D6BCFA', strokeWidth: 2, r: 4 }} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Log Categories Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-primary" />
              Log Categories
            </CardTitle>
            <CardDescription>Distribution of log types across projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={logCategoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent ?? 0 * 100).toFixed(0)}%`}
                >
                  {logCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {logCategoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-medium ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Activity Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Daily Activity
            </CardTitle>
            <CardDescription>Log entries and active users throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="logs" fill="#9b87f5" name="Log Entries" radius={[4, 4, 0, 0]} />
                <Bar dataKey="users" fill="#D6BCFA" name="Active Users" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Scatter Plot */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Performance Analysis
            </CardTitle>
            <CardDescription>Efficiency vs Quality correlation</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="efficiency" 
                  type="number" 
                  domain={[70, 100]} 
                  tick={{ fontSize: 12 }}
                  name="Efficiency %"
                />
                <YAxis 
                  dataKey="quality" 
                  type="number" 
                  domain={[80, 100]} 
                  tick={{ fontSize: 12 }}
                  name="Quality %"
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value, name) => [`${value}%`, name === 'efficiency' ? 'Efficiency' : 'Quality']}
                />
                <Scatter dataKey="quality" fill="#9b87f5" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


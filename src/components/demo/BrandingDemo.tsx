import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Building2, 
  Palette, 
  Type, 
  Copy,
  Check
} from 'lucide-react'
import { useState } from "react"

export function BrandingDemo() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(type)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const brandColors = [
    { name: 'Primary', value: '#9b87f5', css: '--primary: 221.2 83.2% 53.3%', usage: 'Main brand color, buttons, links' },
    { name: 'Secondary', value: '#7E69AB', css: '--secondary: 210 40% 96.1%', usage: 'Supporting elements, backgrounds' },
    { name: 'Accent', value: '#D6BCFA', css: '--accent: 210 40% 96.1%', usage: 'Highlights, hover states' },
    { name: 'Muted', value: '#F1F0FB', css: '--muted: 210 40% 96.1%', usage: 'Subtle backgrounds, disabled states' },
  ]

  const logoVariations = [
    { name: 'Primary Logo', bg: 'bg-white', desc: 'Main logo for light backgrounds' },
    { name: 'On Dark', bg: 'bg-gray-900', desc: 'Logo variant for dark backgrounds' },
    { name: 'Monochrome', bg: 'bg-gray-100', desc: 'Single color version' },
    { name: 'Icon Only', bg: 'bg-primary/10', desc: 'Just the icon mark' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Brand Identity</h3>
        <p className="text-muted-foreground mb-8">
          Oppr Logs brand elements including logo, colors, typography, and usage guidelines
        </p>
      </div>

      {/* Logo Showcase */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <img src="/logo.png" alt="Oppr Logo" className="h-6 w-6" />
            Oppr Logo
          </CardTitle>
          <CardDescription>The official Oppr Logs brand mark and its variations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {logoVariations.map((variation) => (
              <div key={variation.name} className="text-center">
                <div className={`${variation.bg} border rounded-lg p-8 mb-3 flex items-center justify-center h-32`}>
                  <img 
                    src="/logo.png" 
                    alt={variation.name} 
                    className="h-12 w-12 object-contain"
                    style={{
                      filter: variation.name === 'On Dark' ? 'brightness(0) invert(1)' : 
                              variation.name === 'Monochrome' ? 'grayscale(1)' : 'none'
                    }}
                  />
                </div>
                <h4 className="font-medium text-sm">{variation.name}</h4>
                <p className="text-xs text-muted-foreground">{variation.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="space-y-1">
              <h4 className="font-medium">Logo Guidelines</h4>
              <p className="text-sm text-muted-foreground">
                Maintain clear space equal to the logo height. Never stretch or distort the logo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Color Palette
          </CardTitle>
          <CardDescription>Brand colors and their CSS custom properties</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandColors.map((color) => (
              <div key={color.name} className="space-y-3">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-lg border shadow-sm flex-shrink-0"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{color.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{color.usage}</p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">{color.value}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(color.value, color.name)}
                        className="h-6 px-2"
                      >
                        {copiedColor === color.name ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xs bg-muted px-2 py-1 rounded flex-1">{color.css}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(color.css, `${color.name}-css`)}
                        className="h-6 px-2"
                      >
                        {copiedColor === `${color.name}-css` ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Typography
          </CardTitle>
          <CardDescription>Font hierarchy and text styles used throughout the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h1 className="text-3xl font-bold mb-1">Heading 1</h1>
              <code className="text-sm text-muted-foreground">text-3xl font-bold</code>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-2xl font-semibold mb-1">Heading 2</h2>
              <code className="text-sm text-muted-foreground">text-2xl font-semibold</code>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold mb-1">Heading 3</h3>
              <code className="text-sm text-muted-foreground">text-xl font-semibold</code>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="text-base mb-1">Body Text - This is the standard body text used throughout the application for general content and descriptions.</p>
              <code className="text-sm text-muted-foreground">text-base</code>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="text-sm text-muted-foreground mb-1">Small Text - Used for captions, metadata, and secondary information.</p>
              <code className="text-sm text-muted-foreground">text-sm text-muted-foreground</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brand Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Brand Applications
          </CardTitle>
          <CardDescription>How the brand is applied across different UI elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Header Example */}
            <div className="space-y-3">
              <h4 className="font-medium">Application Header</h4>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-14 bg-white border-b flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Oppr Logo" className="h-6 w-6" />
                    <span className="font-semibold">Oppr Logs</span>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Button Examples */}
            <div className="space-y-3">
              <h4 className="font-medium">Button Variations</h4>
              <div className="space-y-2">
                <Button className="w-full">Primary Button</Button>
                <Button variant="secondary" className="w-full">Secondary Button</Button>
                <Button variant="outline" className="w-full">Outline Button</Button>
              </div>
            </div>

            {/* Badge Examples */}
            <div className="space-y-3">
              <h4 className="font-medium">Status Indicators</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Palette, 
  Layout, 
  Component, 
  BarChart3, 
  Settings,
  Building2
} from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Toaster } from "@/components/ui/sonner"
import { ComponentsDemo } from "@/components/demo/ComponentsDemo"
import { FormsDemo } from "@/components/demo/FormsDemo"
import { LayoutsDemo } from "@/components/demo/LayoutsDemo"
import { ChartsEnhancedDemo } from "@/components/demo/ChartsEnhancedDemo"
import { PatternsDemo } from "@/components/demo/PatternsDemo"
import { SidebarDemo } from "@/components/demo/SidebarDemo"
import { BrandingDemo } from "@/components/demo/BrandingDemo"
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent } from "@/components/ui/sidebar"

function App() {

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Toaster />
        
        <Sidebar collapsible="none">
          <SidebarContent className="bg-sidebar">
            <SidebarGroup>
              <SidebarGroupLabel className="text-sm font-medium text-sidebar-foreground/70">
                Oppr Design System
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="p-4">
                  <img src="/logo.png" alt="Oppr Logo" className="h-8 w-8 mb-2" />
                  <p className="text-sm text-muted-foreground">Component Showcase</p>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Oppr Logo" className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">Oppr Design System</h1>
                <p className="text-sm text-muted-foreground">Component Showcase</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback>DS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="branding" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Brand
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center gap-2">
              <Component className="h-4 w-4" />
              Components
            </TabsTrigger>
            <TabsTrigger value="sidebar" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              Sidebar
            </TabsTrigger>
            <TabsTrigger value="forms" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Forms
            </TabsTrigger>
            <TabsTrigger value="layouts" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              Layouts
            </TabsTrigger>
            <TabsTrigger value="charts" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Charts
            </TabsTrigger>
            <TabsTrigger value="patterns" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Patterns
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Oppr Logs Design System</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive showcase of the Oppr Logs design system, featuring components, patterns, and layouts used throughout the application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Component className="h-5 w-5" />
                    UI Components
                  </CardTitle>
                  <CardDescription>
                    Reusable UI components built with Radix UI and styled with Tailwind CSS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Buttons</Badge>
                    <Badge>Cards</Badge>
                    <Badge>Forms</Badge>
                    <Badge>Navigation</Badge>
                    <Badge>Data Display</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Design Tokens
                  </CardTitle>
                  <CardDescription>
                    Consistent color palette, typography, and spacing system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-primary"></div>
                      <span className="text-sm">Primary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-secondary"></div>
                      <span className="text-sm">Secondary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-accent"></div>
                      <span className="text-sm">Accent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    Layout Patterns
                  </CardTitle>
                  <CardDescription>
                    Common layout patterns and page structures from Oppr Logs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Dashboard</Badge>
                    <Badge variant="outline">Project Cards</Badge>
                    <Badge variant="outline">Data Tables</Badge>
                    <Badge variant="outline">Forms</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Branding Tab */}
          <TabsContent value="branding" className="space-y-8">
            <BrandingDemo />
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <ComponentsDemo />
          </TabsContent>

          {/* Sidebar Tab */}
          <TabsContent value="sidebar" className="space-y-8">
            <SidebarDemo />
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-8">
            <FormsDemo />
          </TabsContent>

          {/* Layouts Tab */}
          <TabsContent value="layouts" className="space-y-8">
            <LayoutsDemo />
          </TabsContent>

          {/* Charts Tab */}
          <TabsContent value="charts" className="space-y-8">
            <ChartsEnhancedDemo />
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <PatternsDemo />
          </TabsContent>
        </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App

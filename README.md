# Oppr Design System Showcase

A comprehensive showcase of the Oppr Logs design system, featuring components, patterns, and layouts used throughout the application.

## Overview

This project demonstrates the design system and component library used in Oppr Logs, showcasing:

- **UI Components**: Reusable components built with Radix UI and styled with Tailwind CSS
- **Design Tokens**: Consistent color palette, typography, and spacing system
- **Layout Patterns**: Common layout patterns and page structures
- **Form Components**: Input controls and form elements
- **Data Visualization**: Charts and statistics displays
- **Design Patterns**: Specific conventions and patterns used in Oppr Logs

## Features

### Component Library
- Buttons with various styles and sizes
- Cards with consistent styling
- Badges for status indicators
- Progress bars and loading states
- Avatars and user profile elements
- Form inputs and controls

### Design System
- CSS custom properties for theming
- Light and dark mode support
- Consistent spacing and typography
- Accessible color contrasts
- Responsive design patterns

### Oppr Logs Patterns
- Project card layouts
- Top bar navigation pattern
- Feature iconography
- Status indicators and runtime displays
- Member management interfaces

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Radix UI** - Headless component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants
- **Clsx & Tailwind Merge** - Utility class management

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oppr-design-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── demo/              # Showcase demo components
│   │   ├── ComponentsDemo.tsx
│   │   ├── FormsDemo.tsx
│   │   ├── LayoutsDemo.tsx
│   │   ├── ChartsDemo.tsx
│   │   └── PatternsDemo.tsx
│   └── [other components from Oppr Logs]
├── lib/
│   └── utils.ts           # Utility functions
├── hooks/
│   └── use-toast.ts       # Toast notifications
├── App.tsx                # Main showcase application
├── main.tsx               # Application entry point
└── index.css              # Global styles and design tokens
```

## Design Tokens

The design system uses CSS custom properties for consistent theming:

### Colors
- `--primary`: Main brand color
- `--secondary`: Supporting color
- `--muted`: Subtle backgrounds
- `--accent`: Highlight color
- `--destructive`: Error states
- `--border`: Border colors
- `--background`: Main background
- `--foreground`: Main text color

### Spacing
- Consistent spacing scale using Tailwind's spacing system
- Component-specific padding and margins

### Typography
- System font stack for optimal performance
- Consistent text sizes and line heights
- Font weight variations for hierarchy

## Component Usage

### Buttons
```tsx
import { Button } from "@/components/ui/button"

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button>
  <Icon className="h-4 w-4 mr-2" />
  With Icon
</Button>
```

### Cards
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Forms
```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
```

## Customization

### Adding New Components
1. Create the component in `src/components/ui/`
2. Follow the existing patterns for variants and styling
3. Export the component and add it to the showcase

### Modifying Design Tokens
1. Update CSS custom properties in `src/index.css`
2. Ensure both light and dark mode values are provided
3. Update Tailwind config if needed

### Theme Customization
The design system supports both light and dark modes. Toggle between modes using the theme switcher in the header.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

When adding new components or patterns:

1. Follow the existing code style and patterns
2. Ensure components are accessible
3. Add proper TypeScript types
4. Include examples in the showcase
5. Update documentation as needed

## License

This project is part of the Oppr Logs application and follows the same licensing terms.
# Design System

## Color Palette
- Primary: #212B5F (navy)
- Accent: #A73232 (red)
- Background: #F4F4F4
- Text: #000000

## Theme & Style Separation
- `theme.css`: Centralized design tokens (colors, spacing, radii, shadows, typography)
- `style.css`: References theme variables for all styling
- Avoid hard-coded values; use CSS variables from theme.css

## Typography
- Clean, readable sans-serif font stack
- Headings: bold, clear hierarchy
- Body: regular weight, high contrast

## Spacing & Layout
- Use a consistent spacing scale (e.g., 4px, 8px, 16px, 32px)
- Container max-width: 1200px, centered
- Responsive breakpoints: mobile-first, with breakpoints at 600px, 900px, 1200px

## Border Radius & Shadows
- Border radius: 4px (default), 8px (cards/buttons)
- Subtle box-shadows for cards and modals

## Buttons
- Primary, secondary, and text button variants
- Use theme colors and consistent padding

## Visual Philosophy
- Clean, professional, trustworthy, modern
- Contractor/service-business friendly

## Example CSS Variable Mapping
- --color-primary: #212B5F
- --color-accent: #A73232
- --color-bg: #FFFFFF
- --color-bg-alt: #F4F4F4
- --color-text: #000000
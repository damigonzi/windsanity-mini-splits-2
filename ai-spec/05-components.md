# Components

## Reusable UI Components
- Button (primary, secondary, text)
- Card (service, project, blog post)
- Hero section
- CTA banner
- Header (site navigation)
- Footer (site info, links)
- Form fields (input, textarea, select, checkbox)
- Blog card
- Project card
- Calculator container

## Section Patterns
- Hero + intro
- Services grid
- Projects/gallery
- Testimonials
- Contact/lead form
- Blog index

## Component Reuse
- Components should be modular and reusable across pages
- Structure and style for easy reuse in future business templates

## Image Handling in Components

Components that render images should use valid image paths from the existing project asset structure.

Preferred approach:
- centralize commonly used image paths in a shared module such as `imagePaths.js`
- avoid scattering hard-coded image paths across multiple components
- use fixed placeholder images where needed rather than runtime-random image selection

Examples:
- logo component → `/images/logo/windsanity-logo.webp`
- hero component → `/images/Home+Page+Image.webp`
- project cards → valid files from `/images/customer_projects/`
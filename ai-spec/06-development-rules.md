# Development Rules

## Coding Standards
- Use vanilla JavaScript only (no React or frameworks)
- Modular JS functions for reusable components
- Use CSS variables from theme.css for all styling
- Keep code simple, maintainable, and template-friendly
- Avoid IDs for styling, !important, and unnecessary complexity
- Use semantic HTML
- Responsive design is required

## AI Coding Guidance
- Write code for clarity and reusability
- Prefer composition over duplication
- Document components and functions with comments
- Keep business-specific logic separate from generic template logic

## Asset Path Rules

- Do not assume images are stored in a flat `/images` directory
- Use the real existing asset structure documented in the spec
- For Vite public assets, reference images with root-relative paths like `/images/...`
- Do not use `/public/...` in final browser-facing image paths
- Prefer a centralized `imagePaths.js` module for shared image references

## Multi-Page Architecture Rules

- This site is a true multi-page site, not a pseudo-SPA
- Do not use one `main.js` file to route pages based on `window.location.pathname`
- Each HTML page should load its own page-specific script
- Shared rendering logic may live in shared utility files
- Avoid duplicating page content across `main.js` and page-specific modules
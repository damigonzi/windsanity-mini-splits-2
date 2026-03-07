# Template Reuse

## Reusable Structure
- Page patterns and components are designed for reuse across small business sites
- Content, theme tokens, and branding can be swapped for new businesses

## What Stays Generic
- Page structure (Home, About, Services, Projects, Blog, Contact)
- Component architecture (buttons, cards, forms, navigation)
- Theme variable system (colors, spacing, typography)

## What Is Business-Specific
- Content (text, images, testimonials, blog posts)
- Branding (logo, color tweaks, business name)
- Service offerings and project/gallery content

## Content Replacement Strategy
- All business-specific content is isolated for easy replacement
- Theme tokens and assets are centralized for quick rebranding

## Easy Rebranding
- Update theme.css and content files to rebrand for a new business
- Keep all generic logic and structure unchanged

## Blog
Blog content should be structured so it can later be migrated to an owner-editable content workflow.

Initial implementation may use static HTML pages or hard-coded content, but the architecture should avoid tightly coupling blog content to layout logic.

Future-friendly approaches include:
- markdown-based blog content
- data-driven post metadata
- CMS-backed content editing
# Site Architecture

## Multi-Page Hybrid Approach
- The site is a multi-page website (not a SPA)
- Each main page is a separate HTML file, routed by the server
- Selective dynamic JavaScript features are allowed (e.g., calculator, form validation, dynamic cards)

## Key Pages
- Home
- About
- Services
- Projects
- Calculator (BTU/cost calculator)
- Blog
- Contact

## Interactive Features
- The calculator is interactive and dynamic, but lives within a normal multi-page site
- Dynamic cards/components are allowed where appropriate
- Form validation is handled with vanilla JS

## Blog Support
- Blog content is supported from the start
- Blog architecture should be scalable for future growth
- Blog posts are organized in a dedicated folder/section

Blog content should be structured so it can later be migrated to an owner-editable content workflow.

Initial implementation may use static HTML pages or hard-coded content, but the architecture should avoid tightly coupling blog content to layout logic.

Future-friendly approaches include:
- markdown-based blog content
- data-driven post metadata
- CMS-backed content editing

## Project Photos
- Project/gallery photos are hard-coded for now, but structure should allow future data-driven enhancement

## Reference Inputs
- Use /websites/windsanity-mini-splits and https://www.windsanity-mini-splits.com/ for content and structure reference only

This site should use true multi-page architecture. Each page should load its own page-specific module rather than relying on client-side pathname routing in a shared main entry file.


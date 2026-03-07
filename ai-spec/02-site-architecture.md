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

## Project Photos
- Project/gallery photos are hard-coded for now, but structure should allow future data-driven enhancement

## Reference Inputs
- Use /websites/windsanity-mini-splits and https://www.windsanity-mini-splits.com/ for content and structure reference only
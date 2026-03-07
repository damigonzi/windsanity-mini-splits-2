# Content Structure

## Page Content Organization
- Each page has a clear section structure: hero, intro, services, projects, testimonials, CTA, contact
- Content is organized by page and section for maintainability

## Blog Content
- Blog posts are stored in a dedicated folder/section
- Each post includes: title, date, author, summary, content, optional image
- Blog index page lists posts as cards

## Project/Gallery Content
- Project photos and details are hard-coded for now
- Each project includes: title, description, images, date, location
- Structure allows for future data-driven enhancement

## Forms
- Forms are present on contact and calculator pages
- Fields: name, email, phone, message, plus calculator-specific fields

## Reference Inputs
- Use the local reference folder and live site for content ideas, not for direct implementation

## Image Asset Structure

Project images are not stored in a flat `/images` directory.

Actual image structure:

- `/images/customer_projects/` for real installation and project photos
- `/images/graphics/` for supporting graphics and decorative visuals
- `/images/logo/windsanity-logo.webp` for the business logo
- `/images/Home+Page+Image.webp` for the homepage hero image

Guidance:
- Hero sections should prefer `/images/Home+Page+Image.webp`
- Logo usage should always use `/images/logo/windsanity-logo.webp`
- Project cards and gallery sections should use valid images from `/images/customer_projects/`
- Decorative graphics may use valid images from `/images/graphics/`

Do not assume a flat `/images` structure.
Do not reference `/public/images` in browser paths.
For Vite public assets, use paths like `/images/...`
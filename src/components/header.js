// Header component
import { images } from '../scripts/imagePaths.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container">
      <nav class="navbar">
        <a href="/index.html" class="logo" aria-label="Home">
          <img src="${images.logo}" alt="Windsanity Mini-Splits logo" />
        </a>
        <ul class="nav-links">
          <li><a href="/about.html">About</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="/projects.html">Projects</a></li>
          <li><a href="/calculator.html">Calculator</a></li>
          <li><a href="/blog.html">Blog</a></li>
        </ul>
        <a href="/contact.html" class="nav-cta">Contact</a>
      </nav>
    </div>
  `;
  return header;
}

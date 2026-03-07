// Header component
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <nav class="container">
      <a href="/pages/index.html" class="logo">Windsanity Mini-Splits</a>
      <ul class="nav-links">
        <li><a href="/pages/about.html">About</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/projects.html">Projects</a></li>
        <li><a href="/pages/calculator.html">Calculator</a></li>
        <li><a href="/pages/blog.html">Blog</a></li>
        <li><a href="/pages/contact.html">Contact</a></li>
      </ul>
    </nav>
  `;
  return header;
}

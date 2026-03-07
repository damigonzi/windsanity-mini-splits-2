// Footer component
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <p>© 2026 Windsanity Mini-Splits. All rights reserved.</p>
      <ul class="footer-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  `;
  return footer;
}

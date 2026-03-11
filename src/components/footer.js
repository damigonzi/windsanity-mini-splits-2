// Footer component
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-title">Windsanity Mini-Splits</div>
          <div class="footer-contact">
            <span>Veteran-Owned HVAC Specialist</span><br>
            <span>Serving the local area</span><br>
            <span>Phone: <a href="tel:+14026135142">(402) 613-5142</a></span><br>
            <span>Email: <a href="mailto:windsanity.mini.split@gmail.com">windsanity.mini.split@gmail.com</a></span>
          </div>
        </div>
        <nav class="footer-nav">
          <ul class="footer-links">
            <li><a href="/about.html">About</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/calculator.html">Calculator</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="footer-social">
          <ul class="footer-social-links">
            <li><a href="https://www.facebook.com/WinsanityMiniSplits" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/windsanity.us" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Windsanity Mini-Splits. All rights reserved.</span>
      </div>
    </div>
  `;
  return footer;
}

import { renderHeader, renderFooter, renderServicesSection, renderCtaBanner } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
main.innerHTML = '<h1>Our Services</h1>';
main.appendChild(renderServicesSection());
main.appendChild(renderCtaBanner({
  heading: 'Ready to get started?',
  cta: 'Request a Free Estimate',
  href: '/contact.html'
}));
app.appendChild(main);
renderFooter(app);

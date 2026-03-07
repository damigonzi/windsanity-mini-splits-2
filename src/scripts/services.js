import { renderHeader, renderFooter, renderServicesSection, renderCtaBanner } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
const section = document.createElement('section');
section.className = 'section';
section.innerHTML = '<h1>Our Services</h1>';
section.appendChild(renderServicesSection());
section.appendChild(renderCtaBanner({
  heading: 'Ready to get started?',
  cta: 'Request a Free Estimate',
  href: '/contact.html'
}));
main.appendChild(section);
app.appendChild(main);
renderFooter(app);

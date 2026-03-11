import { renderHeader, renderFooter, renderValueSection, renderServicesSection, renderCtaBanner } from './shared.js';
import { createHero } from '../components/hero.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');

main.appendChild(createHero({
  headline: 'Efficient Mini-Split Installation for Homes and Businesses',
  subheadline: 'Professional ductless HVAC solutions designed for comfort, efficiency, and long-term reliability.',
  description: 'Our veteran-led team delivers high-quality mini-split installations tailored to your space, whether you\'re cooling a garage, upgrading your home HVAC system, or designing a climate-controlled workspace.',
  primaryCta: 'Request a Free Estimate',
  secondaryCta: 'Explore Our Services',
}));

main.appendChild(renderValueSection());
main.appendChild(renderServicesSection());
main.appendChild(renderCtaBanner({
  heading: 'Ready to upgrade your comfort?',
  cta: 'Contact us today!',
  href: '/contact.html'
}));

app.appendChild(main);
renderFooter(app);

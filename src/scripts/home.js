
import { renderHeader, renderFooter, renderHero, renderValueSection, renderServicesSection, renderCtaBanner } from './shared.js';
import { images } from './imagePaths.js';


const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');

// Hero Section with image
main.appendChild(renderHero({
  headline: 'Efficient Mini-Split Installation for Homes and Businesses',
  subheadline: 'Professional ductless HVAC solutions designed for comfort, efficiency, and long-term reliability.',
  description: 'Our veteran-led team delivers high-quality mini-split installations tailored to your space, whether you\'re cooling a garage, upgrading your home HVAC system, or designing a climate-controlled workspace.',
  primaryCta: 'Request a Free Estimate',
  secondaryCta: 'Explore Our Services',
  image: images.hero
}));

// Value Section
main.appendChild(renderValueSection());

// Services Section
main.appendChild(renderServicesSection());

// CTA Banner
main.appendChild(renderCtaBanner({
  heading: 'Ready to upgrade your comfort?',
  cta: 'Contact us today!',
  href: '/contact.html'
}));

app.appendChild(main);
renderFooter(app);

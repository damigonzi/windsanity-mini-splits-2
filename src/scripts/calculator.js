import { renderHeader, renderFooter, renderCtaBanner } from './shared.js';
import { createHero } from '../components/hero.js';
import { createCalculator } from '../components/calculator.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');

main.appendChild(createHero({
  headline: 'Estimate Your Mini-Split Project Cost',
  subheadline: 'Answer a few questions about your space and get an instant cost estimate — no signup required.',
  primaryCta: 'Get My Estimate',
  primaryCtaHref: '#calculator',
  simple: true,
}));

const calcSection = document.createElement('section');
calcSection.className = 'section';
calcSection.id = 'calculator';
const calcContainer = document.createElement('div');
calcContainer.className = 'container';
calcContainer.innerHTML = '<h2>BTU & Cost Calculator</h2><p>Use the tool below to estimate the right system size and installation cost for your project.</p>';
calcContainer.appendChild(createCalculator());
calcSection.appendChild(calcContainer);
main.appendChild(calcSection);

main.appendChild(renderCtaBanner({
  heading: 'Ready for an accurate quote?',
  cta: 'Contact Us',
  href: '/contact.html'
}));

app.appendChild(main);
renderFooter(app);

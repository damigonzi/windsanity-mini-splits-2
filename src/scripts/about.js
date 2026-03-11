import { renderHeader, renderFooter, renderCtaBanner } from './shared.js';
import { createHero } from '../components/hero.js';
import { about } from './content.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');

// Hero
main.appendChild(createHero({
  headline: about.hero.headline,
  subheadline: about.hero.subheadline,
  primaryCta: 'Request a Free Estimate',
  secondaryCta: 'Our Services',
  simple: true,
}));

// Company story
const storySection = document.createElement('section');
storySection.className = 'section';
const storyContainer = document.createElement('div');
storyContainer.className = 'container';
storyContainer.innerHTML = `
  <h2>${about.story.heading}</h2>
  ${about.story.paragraphs.map(p => `<p>${p}</p>`).join('')}
`;
storySection.appendChild(storyContainer);
main.appendChild(storySection);

// Experience highlights
const highlightsSection = document.createElement('section');
highlightsSection.className = 'value-section section';
const highlightsContainer = document.createElement('div');
highlightsContainer.className = 'container';
const highlightItems = about.highlights.map(h => `<li>${h}</li>`).join('');
highlightsContainer.innerHTML = `
  <h2>Why Choose Windsanity?</h2>
  <ul>${highlightItems}</ul>
`;
highlightsSection.appendChild(highlightsContainer);
main.appendChild(highlightsSection);

// CTA
main.appendChild(renderCtaBanner({
  heading: 'Ready to upgrade your comfort?',
  cta: 'Request a Free Estimate',
  href: '/contact.html'
}));

app.appendChild(main);
renderFooter(app);

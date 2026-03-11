import { renderHeader, renderFooter, renderCtaBanner } from './shared.js';
import { createHero } from '../components/hero.js';
import { createCard } from '../components/card.js';
import { blogPosts } from './content.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');

main.appendChild(createHero({
  headline: 'Mini-Split Tips & Resources',
  subheadline: 'Expert advice on HVAC installation, maintenance, and energy efficiency from the Windsanity team.',
  primaryCta: 'Request a Free Estimate',
  simple: true,
}));

const blogSection = document.createElement('section');
blogSection.className = 'section';
const container = document.createElement('div');
container.className = 'container';
container.innerHTML = '<h2>Latest Articles</h2>';

const grid = document.createElement('div');
grid.className = 'services-grid';

blogPosts.forEach(post => {
  const card = createCard({ title: post.title, description: post.excerpt });
  const link = document.createElement('a');
  link.href = post.href;
  link.className = 'btn btn-secondary';
  link.style.marginTop = 'auto';
  link.textContent = 'Read Article';
  card.appendChild(link);
  grid.appendChild(card);
});

container.appendChild(grid);
blogSection.appendChild(container);
main.appendChild(blogSection);

main.appendChild(renderCtaBanner({
  heading: 'Have questions about mini-splits?',
  cta: 'Contact Our Team',
  href: '/contact.html'
}));

app.appendChild(main);
renderFooter(app);

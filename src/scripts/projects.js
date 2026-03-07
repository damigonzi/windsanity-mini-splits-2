import { renderHeader, renderFooter, renderProjectsSection, renderCtaBanner } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
const section = document.createElement('section');
section.className = 'section';
section.innerHTML = '<h1>Project Gallery</h1>';
section.appendChild(renderProjectsSection());
section.appendChild(renderCtaBanner({
  heading: 'See more or start your project?',
  cta: 'Contact us',
  href: '/contact.html'
}));
main.appendChild(section);
app.appendChild(main);
renderFooter(app);

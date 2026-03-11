import { renderHeader, renderFooter, renderProjectsSection, renderCtaBanner } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');

const pageHeader = document.createElement('div');
pageHeader.className = 'container section';
pageHeader.innerHTML = '<h1>Project Gallery</h1>';
main.appendChild(pageHeader);

main.appendChild(renderProjectsSection());
main.appendChild(renderCtaBanner({
  heading: 'See more or start your project?',
  cta: 'Contact us',
  href: '/contact.html'
}));

app.appendChild(main);
renderFooter(app);

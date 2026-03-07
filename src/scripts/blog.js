import { renderHeader, renderFooter } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
const section = document.createElement('section');
section.className = 'section';
section.innerHTML = `<h1>Blog</h1>
<p>Stay tuned for tips, news, and updates about mini-split systems and our latest projects.</p>`;
main.appendChild(section);
app.appendChild(main);
renderFooter(app);

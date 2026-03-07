import { renderHeader, renderFooter } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
const section = document.createElement('section');
section.className = 'section';
section.innerHTML = `<h1>BTU Calculator</h1>
<p>Interactive calculator coming soon.</p>`;
main.appendChild(section);
app.appendChild(main);
renderFooter(app);

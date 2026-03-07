import { renderHeader, renderFooter } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
const section = document.createElement('section');
section.className = 'section';
section.innerHTML = `<h1>About Windsanity Mini-Splits</h1>
<p>Our team has over 15 years of HVAC experience. We’re committed to quality, transparency, and customer satisfaction.</p>`;
main.appendChild(section);
app.appendChild(main);
renderFooter(app);

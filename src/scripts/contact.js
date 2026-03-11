import { renderHeader, renderFooter } from './shared.js';
import { createContactForm } from '../components/form.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
const section = document.createElement('section');
section.className = 'section';
const container = document.createElement('div');
container.className = 'container';
container.innerHTML = '<h1>Contact Us</h1>';
container.appendChild(createContactForm());
section.appendChild(container);
main.appendChild(section);
app.appendChild(main);
renderFooter(app);

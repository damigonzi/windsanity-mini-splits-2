import { renderHeader, renderFooter, renderContactForm } from './shared.js';

const app = document.getElementById('app');
renderHeader(app);

const main = document.createElement('main');
main.className = 'container';
main.innerHTML = '<h1>Contact Us</h1>';
main.appendChild(renderContactForm());
app.appendChild(main);
renderFooter(app);

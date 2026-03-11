import { createHeader } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { createCard } from '../components/card.js';
import { services, projects, valueProp } from './content.js';

export function renderHeader(root) {
  root.appendChild(createHeader());
}

export function renderFooter(root) {
  root.appendChild(createFooter());
}

export function renderValueSection() {
  const section = document.createElement('section');
  section.className = 'value-section section';
  const container = document.createElement('div');
  container.className = 'container';
  const benefitItems = valueProp.benefits.map(b => `<li>${b}</li>`).join('');
  container.innerHTML = `
    <h2>${valueProp.heading}</h2>
    <ul>${benefitItems}</ul>
    <p>${valueProp.body}</p>
  `;
  section.appendChild(container);
  return section;
}

export function renderServicesSection() {
  const section = document.createElement('section');
  section.className = 'services-section section';
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = '<h2>Mini-Split HVAC Services</h2>';
  const grid = document.createElement('div');
  grid.className = 'services-grid';
  services.forEach(service => grid.appendChild(createCard(service)));
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

export function renderProjectsSection() {
  const section = document.createElement('section');
  section.className = 'projects-section';
  const grid = document.createElement('div');
  grid.className = 'services-grid';
  projects.forEach(project => grid.appendChild(createCard(project)));
  section.appendChild(grid);
  return section;
}

export function renderCtaBanner({ heading, cta, href }) {
  const section = document.createElement('section');
  section.className = 'cta-banner section';
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `<h2>${heading}</h2><a href="${href}" class="btn btn-primary">${cta}</a>`;
  section.appendChild(container);
  return section;
}

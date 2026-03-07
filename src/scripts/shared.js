import { images } from './imagePaths.js';
import { createHeader } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { createHero } from '../components/hero.js';
import { createCard } from '../components/card.js';
import { createContactForm } from '../components/form.js';

export function renderHeader(root) {
  root.appendChild(createHeader());
}

export function renderFooter(root) {
  root.appendChild(createFooter());
}

export function renderHero(props) {
  return createHero(props);
}

export function renderValueSection() {
  const section = document.createElement('section');
  section.className = 'value-section section';
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <h2>Why Choose Mini-Splits?</h2>
    <ul>
      <li>Lower energy usage</li>
      <li>Quiet operation</li>
      <li>Zoned temperature control</li>
      <li>Flexible installation for unique spaces</li>
    </ul>
    <p>Mini-split systems are ideal for homes, garages, offices, workshops, and renovation projects where traditional HVAC systems are impractical.</p>
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
  const servicesGrid = document.createElement('div');
  servicesGrid.className = 'services-grid';
  const services = [
    { title: 'Mini-Split Installation', description: 'Custom installation for homes and businesses.', image: images.miniSplitInstall },
    { title: 'Repair & Diagnostics', description: 'Fast troubleshooting and repairs for all brands.', image: images.repair },
    { title: 'Maintenance', description: 'Keep your system running efficiently year-round.', image: images.maintenance },
    { title: 'Consultation', description: 'Expert advice for new projects or upgrades.', image: images.consultation }
  ];
  services.forEach(service => {
    servicesGrid.appendChild(createCard(service));
  });
  container.appendChild(servicesGrid);
  section.appendChild(container);
  return section;
}

export function renderProjectsSection() {
  const section = document.createElement('section');
  section.className = 'projects-section';
  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'services-grid';
  const projects = [
    { title: 'Downtown Loft Retrofit', description: 'Installed 3-zone system in historic building.', image: images.loft1 },
    { title: 'Garage Workshop Upgrade', description: 'Efficient heating/cooling for year-round comfort.', image: images.garage1 },
    { title: 'Home Office Solution', description: 'Quiet, energy-efficient mini-split for productivity.', image: images.office1 },
    { title: 'Retail Storefront', description: 'Discreet installation for customer comfort.', image: images.store1 }
  ];
  projects.forEach(project => {
    projectsGrid.appendChild(createCard(project));
  });
  section.appendChild(projectsGrid);
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

export function renderContactForm() {
  return createContactForm();
}

// Hero section component
export function createHero({ headline, subheadline, description, primaryCta, secondaryCta }) {
  const section = document.createElement('section');
  section.className = 'hero-section';
  section.innerHTML = `
    <div class="container">
      <h1>${headline}</h1>
      <h2>${subheadline}</h2>
      <p>${description}</p>
      <div class="hero-ctas">
        <a href="#contact" class="btn btn-primary">${primaryCta}</a>
        ${secondaryCta ? `<a href="#services" class="btn btn-secondary">${secondaryCta}</a>` : ''}
      </div>
    </div>
  `;
  return section;
}

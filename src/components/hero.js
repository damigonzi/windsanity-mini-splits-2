// Hero section component
export function createHero({ headline, subheadline, description, primaryCta, secondaryCta, image }) {
  const section = document.createElement('section');
  section.className = 'hero-section section';
  section.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <h1>${headline}</h1>
        <h2>${subheadline}</h2>
        <p>${description}</p>
        <div class="hero-ctas">
          <a href="#contact" class="btn btn-primary">${primaryCta}</a>
          ${secondaryCta ? `<a href="#services" class="btn btn-secondary">${secondaryCta}</a>` : ''}
        </div>
      </div>
    </div>
  `;
  return section;
}

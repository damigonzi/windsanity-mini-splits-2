// Hero section component
export function createHero({
  headline,
  subheadline,
  description,
  primaryCta,
  primaryCtaHref = '/contact.html',
  secondaryCta,
  secondaryCtaHref = '/services.html',
  simple = false
}) {
  const section = document.createElement('section');
  section.className = `hero-section section${simple ? ' hero-simple' : ''}`;
  section.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <h1>${headline}</h1>
        <h2>${subheadline}</h2>
        ${description ? `<p>${description}</p>` : ''}
        <div class="hero-ctas">
          <a href="${primaryCtaHref}" class="btn btn-primary">${primaryCta}</a>
          ${secondaryCta ? `<a href="${secondaryCtaHref}" class="btn btn-secondary">${secondaryCta}</a>` : ''}
        </div>
      </div>
    </div>
  `;
  return section;
}

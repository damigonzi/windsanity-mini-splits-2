// Card component
export function createCard({ title = '', description = '', image = '' }) {
  const card = document.createElement('div');
  card.className = 'card';
  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.loading = 'lazy';
    card.appendChild(img);
  }
  const h3 = document.createElement('h3');
  h3.textContent = title;
  card.appendChild(h3);
  const p = document.createElement('p');
  p.textContent = description;
  card.appendChild(p);
  return card;
}

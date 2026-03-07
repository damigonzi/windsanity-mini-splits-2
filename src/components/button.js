// Button component
export function createButton({ text = '', variant = 'primary', onClick = null }) {
  const btn = document.createElement('button');
  btn.className = `btn btn-${variant}`;
  btn.textContent = text;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}

// Contact form component (Netlify compatible)
export function createContactForm() {
  const form = document.createElement('form');
  form.className = 'contact-form';
  form.setAttribute('name', 'contact');
  form.setAttribute('method', 'POST');
  form.setAttribute('data-netlify', 'true');
  form.innerHTML = `
    <input type="hidden" name="form-name" value="contact" />
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone" />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
  `;
  return form;
}

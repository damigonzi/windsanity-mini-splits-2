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
      <label for="zip">ZIP Code</label>
      <input type="text" id="zip" name="zip" inputmode="numeric" pattern="[0-9]{5}" maxlength="5" />
    </div>
    <div class="form-group">
      <label for="service">Service Type</label>
      <select id="service" name="service" required>
        <option value="" disabled selected>Select a service</option>
        <option value="Mini-Split Installation">Mini-Split Installation</option>
        <option value="Repair & Diagnostics">Repair &amp; Diagnostics</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Consultation">Consultation</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit Request</button>
  `;
  return form;
}

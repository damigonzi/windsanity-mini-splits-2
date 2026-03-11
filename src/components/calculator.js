// BTU Cost Calculator component
// Ported from Squarespace. Logic preserved exactly.

const REGIONAL_MULTIPLIERS = {
  AL: 0.879, AK: 1.238, AZ: 1.128, AR: 0.89,  CA: 1.422, CO: 1.027,
  CT: 1.117, DE: 1.002, FL: 1.024, GA: 0.915,  HI: 1.869, ID: 1.02,
  IL: 0.955, IN: 0.913, IA: 0.904, KS: 0.865,  KY: 0.929, LA: 0.935,
  ME: 1.135, MD: 1.153, MA: 1.459, MI: 0.923,  MN: 0.953, MS: 0.833,
  MO: 0.89,  MT: 0.94,  NE: 0.928, NV: 1.001,  NH: 1.115, NJ: 1.146,
  NM: 0.929, NY: 1.233, NC: 0.976, ND: 0.9,    OH: 0.949, OK: 0.879,
  OR: 1.1,   PA: 0.949, RI: 1.124, SC: 0.952,  SD: 0.881, TN: 0.9,
  TX: 0.926, UT: 1.095, VT: 1.144, VA: 1.005,  WA: 1.142, WV: 0.848,
  WI: 0.993, WY: 0.954
};

const STATES = [
  ['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],
  ['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],
  ['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],
  ['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],
  ['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],
  ['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],
  ['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],
  ['NH','New Hampshire'],['NJ','New Jersey'],['NM','New Mexico'],['NY','New York'],
  ['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],
  ['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],
  ['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],
  ['VT','Vermont'],['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],
  ['WI','Wisconsin'],['WY','Wyoming']
];

export function createCalculator() {
  const stateOptions = STATES.map(([val, label]) =>
    `<option value="${val}">${label}</option>`
  ).join('');

  const wrapper = document.createElement('div');
  wrapper.className = 'calculator-widget';
  wrapper.innerHTML = `
    <form class="calculator-form" novalidate>

      <div class="calc-step active">
        <h3>Step 1 of 3: Building Details</h3>
        <div class="calc-input-group">
          <label for="calc-sqft">Square Footage</label>
          <select id="calc-sqft" required>
            <option value="">Select size</option>
            <option value="9000">Under 400 sq ft</option>
            <option value="12000">401–550 sq ft</option>
            <option value="18000">551–850 sq ft</option>
            <option value="24000">851–1,200 sq ft</option>
            <option value="30000">Above 1,200 sq ft</option>
          </select>
        </div>
        <div class="calc-input-group">
          <label for="calc-ceiling">Ceiling Height</label>
          <select id="calc-ceiling">
            <option value="1">8 ft standard</option>
            <option value="1.1">8–10 ft</option>
            <option value="1.2">10–12 ft</option>
            <option value="1.3">Above 12 ft</option>
          </select>
        </div>
        <div class="calc-button-row">
          <button type="button" class="btn btn-primary" data-action="next" data-target="2">Next</button>
        </div>
      </div>

      <div class="calc-step">
        <h3>Step 2 of 3: Environment</h3>
        <div class="calc-input-group">
          <label for="calc-state">State</label>
          <select id="calc-state" required>
            <option value="">Select a state</option>
            ${stateOptions}
          </select>
        </div>
        <div class="calc-input-group">
          <label for="calc-insulation">Insulation Quality</label>
          <select id="calc-insulation">
            <option value="1">Good</option>
            <option value="1.1" selected>Average</option>
            <option value="1.2">Poor</option>
          </select>
        </div>
        <div class="calc-input-group">
          <label for="calc-sun">Sun Exposure</label>
          <select id="calc-sun">
            <option value="1">Heavily shaded</option>
            <option value="1.1" selected>Average</option>
            <option value="1.2">Very sunny</option>
          </select>
        </div>
        <div class="calc-input-group">
          <label for="calc-climate">Climate</label>
          <select id="calc-climate">
            <option value="0">Cold (e.g. Boston)</option>
            <option value="1000" selected>Average</option>
            <option value="2000">Hot (e.g. Houston)</option>
          </select>
        </div>
        <div class="calc-button-row">
          <button type="button" class="btn btn-secondary" data-action="back" data-target="1">Back</button>
          <button type="button" class="btn btn-primary" data-action="next" data-target="3">Next</button>
        </div>
      </div>

      <div class="calc-step">
        <h3>Step 3 of 3: Installation</h3>
        <div class="calc-input-group">
          <label for="calc-install">Do you need installation?</label>
          <select id="calc-install">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div class="calc-input-group" id="calc-electrical-group" style="display:none">
          <label for="calc-electrical">Is electrical already run to the breaker?</label>
          <select id="calc-electrical">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div class="calc-button-row">
          <button type="button" class="btn btn-secondary" data-action="back" data-target="2">Back</button>
          <button type="button" class="btn btn-primary" data-action="calculate">Get Estimate</button>
        </div>
      </div>

      <div class="calc-step">
        <h3>Your Estimate</h3>
        <table class="calc-results">
          <tr><td>BTU System</td><td id="calc-btu-cost">—</td></tr>
          <tr><td>Installation</td><td id="calc-install-cost">—</td></tr>
          <tr><td><strong>Estimated Total</strong></td><td id="calc-total-cost"><strong>—</strong></td></tr>
        </table>
        <p class="calc-disclaimer">This is an estimate only. Contact us for an accurate quote tailored to your project.</p>
        <div class="calc-button-row">
          <button type="button" class="btn btn-secondary" data-action="back" data-target="3">Back</button>
          <button type="button" class="btn btn-secondary" data-action="restart">Start Over</button>
          <a href="/contact.html" class="btn btn-primary">Get a Quote</a>
        </div>
      </div>

    </form>
  `;

  const steps = wrapper.querySelectorAll('.calc-step');

  function showStep(n) {
    steps.forEach((s, i) => s.classList.toggle('active', i === n - 1));
  }

  function validateStep(n) {
    const step = steps[n - 1];
    if (!step) return true;
    for (const el of step.querySelectorAll('select[required]')) {
      if (!el.value) {
        el.reportValidity();
        return false;
      }
    }
    return true;
  }

  function calculateCost() {
    const baseBTU   = parseInt(wrapper.querySelector('#calc-sqft').value || 12000);
    const ceiling   = parseFloat(wrapper.querySelector('#calc-ceiling').value || 1);
    const insulation = parseFloat(wrapper.querySelector('#calc-insulation').value || 1.1);
    const sun       = parseFloat(wrapper.querySelector('#calc-sun').value || 1.1);
    const climate   = parseInt(wrapper.querySelector('#calc-climate').value || 1000);
    const state     = wrapper.querySelector('#calc-state').value;
    const install   = wrapper.querySelector('#calc-install').value;
    const electrical = wrapper.querySelector('#calc-electrical').value;

    const adjustedBTU = baseBTU * ceiling * insulation * sun + climate;
    const btuCost = Math.round(adjustedBTU * 0.25);
    const multiplier = REGIONAL_MULTIPLIERS[state] || 1.0;
    const finalBTUCost = Math.round(btuCost * multiplier);
    const installCost = install === 'yes' ? (electrical === 'yes' ? 1200 : 2000) : 0;
    const total = finalBTUCost + installCost;

    wrapper.querySelector('#calc-btu-cost').textContent = `$${finalBTUCost.toLocaleString()}`;
    wrapper.querySelector('#calc-install-cost').textContent = installCost > 0 ? `$${installCost.toLocaleString()}` : 'Not included';
    wrapper.querySelector('#calc-total-cost').innerHTML = `<strong>$${total.toLocaleString()}</strong>`;
  }

  // Button event delegation
  wrapper.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const target = parseInt(btn.dataset.target);

    if (action === 'next' && validateStep(target - 1)) showStep(target);
    if (action === 'back') showStep(target);
    if (action === 'calculate' && validateStep(3)) { calculateCost(); showStep(4); }
    if (action === 'restart') showStep(1);
  });

  // Show/hide electrical field
  wrapper.querySelector('#calc-install').addEventListener('change', (e) => {
    wrapper.querySelector('#calc-electrical-group').style.display =
      e.target.value === 'yes' ? 'block' : 'none';
  });

  return wrapper;
}

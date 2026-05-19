// NAV
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

// REVEAL
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, {threshold: 0.08, rootMargin: '0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// PRICING TOGGLE
function setPricing(mode) {
  const monthly = mode === 'monthly';
  document.getElementById('toggleMonthly').classList.toggle('active', monthly);
  document.getElementById('toggleYearly').classList.toggle('active', !monthly);
  document.getElementById('price-pro-val').textContent = monthly ? '12' : '10';
  document.getElementById('price-pro-period').textContent = monthly ? 'al mes' : 'al mes (facturado anualmente)';
  document.getElementById('price-team-val').textContent = monthly ? '29' : '23';
  document.getElementById('price-team-period').textContent = monthly ? 'al mes' : 'al mes (facturado anualmente)';
}

// HOW STEPS
function setStep(el, i) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

// FAQ
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

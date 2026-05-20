  window.addEventListener('scroll', function () {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

  function setStep(el, i) {
  document.querySelectorAll('.step').forEach(function (s) { s.classList.remove('active'); });
  el.classList.add('active');
}

  function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}

  function setPricing(mode) {
  var monthly = mode === 'monthly';
  document.getElementById('toggleMonthly').classList.toggle('active', monthly);
  document.getElementById('toggleYearly').classList.toggle('active', !monthly);
  document.getElementById('price-pro-val').textContent = monthly ? '12' : '10';
  document.getElementById('price-pro-period').textContent = monthly ? 'al mes' : 'al mes (facturado anualmente)';
  document.getElementById('price-team-val').textContent = monthly ? '29' : '23';
  document.getElementById('price-team-period').textContent = monthly ? 'al mes' : 'al mes (facturado anualmente)';
}

  var toastTimer;
  var toast = document.getElementById('toast');

  function showToast(message) {
  if (toastTimer) clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(function () {
  toast.classList.remove('visible');
}, 3000);
}

  document.addEventListener('click', function (e) {
  var target = e.target.closest('[data-toast]');
  if (target) {
  e.preventDefault();
  showToast(target.getAttribute('data-toast'));
}
});
  lucide.createIcons();

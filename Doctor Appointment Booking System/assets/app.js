
document.addEventListener('DOMContentLoaded', () => {
  const toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast);
  window.showToast = (msg) => { toast.textContent = msg; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2600) };
  const observer = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.querySelectorAll('[data-demo]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); showToast(el.dataset.demo || 'Demo action completed'); }));
  document.querySelectorAll('.slot').forEach(s => s.addEventListener('click', () => { document.querySelectorAll('.slot').forEach(x => x.classList.remove('selected')); s.classList.add('selected'); }));
  const form = document.querySelector('[data-form]');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); showToast(form.dataset.message || 'Saved successfully'); });
  const search = document.querySelector('[data-search]');
  if (search) search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    document.querySelectorAll('[data-search-item]').forEach(x => x.style.display = x.textContent.toLowerCase().includes(q) ? '' : 'none');
  });
  const countEls = document.querySelectorAll('[data-count]');
  countEls.forEach(el => { const end = Number(el.dataset.count); let n = 0; const step = Math.max(1, Math.ceil(end / 35)); const t = setInterval(() => { n = Math.min(end, n + step); el.textContent = n.toLocaleString(); if (n >= end) clearInterval(t) }, 30) });
});

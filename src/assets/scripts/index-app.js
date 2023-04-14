window.addEventListener('click', (evt) => {
  const target = evt.target.closest('[data-link]');
  if (!target) return;
  window.open(target.dataset.link, '_blank');
})
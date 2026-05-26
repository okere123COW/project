const serviceToggles = document.querySelectorAll('.service-toggle');
const contactButton = document.getElementById('contact-team');
const serviceNote = document.querySelector('.service-note');

serviceToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.service-card');
    const detail = card.querySelector('.service-detail');
    const isOpen = card.classList.toggle('is-open');

    toggle.setAttribute('aria-expanded', isOpen);
    detail.style.maxHeight = isOpen ? `${detail.scrollHeight}px` : '0';
  });
});

if (contactButton) {
  contactButton.addEventListener('click', () => {
    contactButton.textContent = 'Request sent';
    contactButton.disabled = true;
    serviceNote.textContent = 'Thanks! We will contact you soon with a tailored business plan.';
    contactButton.classList.add('button-sent');
  });
}

window.addEventListener('load', () => {
  document.querySelectorAll('.service-detail').forEach((detail) => {
    detail.style.maxHeight = '0';
  });
});

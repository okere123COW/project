const scrollToTopBtn = document.getElementById('scrollToTop');
const missionSection = document.getElementById('mission');
const revealElements = document.querySelectorAll('.reveal-on-scroll');
const valueCards = document.querySelectorAll('.value-card');
const statNumbers = document.querySelectorAll('.stat-number');

const observerOptions = {
  threshold: 0.2,
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, observerOptions);

revealElements.forEach(element => revealObserver.observe(element));

const statObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const numberEl = entry.target;
    const targetValue = Number(numberEl.dataset.target) || 0;
    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / targetValue), 20);

    const counter = setInterval(() => {
      current += 1;
      numberEl.textContent = current;
      if (current >= targetValue) {
        clearInterval(counter);
      }
    }, stepTime);

    observer.unobserve(numberEl);
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statObserver.observe(stat));

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 320) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function updateValueDetails(card) {
  const detail = card.dataset.detail;
  const detailParagraph = card.querySelector('.card-detail p');
  detailParagraph.textContent = detail;
}

valueCards.forEach(card => {
  updateValueDetails(card);
  const button = card.querySelector('.detail-toggle');
  button.addEventListener('click', event => {
    event.stopPropagation();
    card.classList.toggle('active');
  });

  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

const scrollToMission = document.getElementById('scrollToMission');
if (scrollToMission) {
  scrollToMission.addEventListener('click', () => {
    missionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

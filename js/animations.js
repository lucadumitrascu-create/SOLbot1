/* Animations & Interactive Components */

/* Review Carousel - clone cards for infinite loop */
const initReviewCarousel = () => {
  const track = document.querySelector('.review-track');
  if (!track) return;

  const cards = track.querySelectorAll('.review-card');
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
};

/* FAQ Accordion */
const initFAQAccordion = () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      /* Close all */
      faqItems.forEach((i) => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      /* Open clicked if it was closed */
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
};

/* Fade-in on scroll (Intersection Observer) */
const initScrollAnimations = () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => observer.observe(el));
};

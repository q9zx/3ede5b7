/* LINK Framework Engine RC1: carrusel, lightbox, carga diferida y diálogos accesibles. */
(() => {
  const track = document.querySelector('.gallery-track'), lazyImages = [...document.querySelectorAll('img[data-src]')];
  let cards = [...document.querySelectorAll('.gallery-card')];
  const lightbox = document.querySelector('.lightbox'), lightboxImage = lightbox.querySelector('img'), lightboxCaption = lightbox.querySelector('p'), chat = document.querySelector('.chat-dialog');
  let activeIndex = 0, lastTrigger = null;
  // Secuencia curada: fachada, áreas sociales, cocina, habitación y exteriores.
  cards = [0, 1, 3, 8, 9, 10, 11, 2, 4, 5, 6, 7].map(index => cards[index]);
  cards.forEach(card => track.append(card));
  const loadImage = image => { if (image.dataset.src) { image.src = image.dataset.src; image.removeAttribute('data-src'); } };
  if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { loadImage(entry.target); observer.unobserve(entry.target); } }), { rootMargin: '300px 0px' }); lazyImages.forEach(image => observer.observe(image)); } else lazyImages.forEach(loadImage);
  const moveTrack = direction => track.scrollBy({ left: direction * Math.min(track.clientWidth * .75, 600), behavior: 'smooth' });
  document.querySelector('.previous').addEventListener('click', () => moveTrack(-1)); document.querySelector('.next').addEventListener('click', () => moveTrack(1)); track.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') moveTrack(-1); if (event.key === 'ArrowRight') moveTrack(1); });
  function showLightbox(index, trigger) { activeIndex = index; const source = cards[activeIndex].querySelector('img'); loadImage(source); lightboxImage.src = source.currentSrc || source.src; lightboxImage.alt = source.alt; lightboxCaption.textContent = `${activeIndex + 1} / ${cards.length}`; lastTrigger = trigger || cards[activeIndex]; if (!lightbox.open) lightbox.showModal(); }
  const moveLightbox = step => showLightbox((activeIndex + step + cards.length) % cards.length);
  cards.forEach((card, index) => { card.tabIndex = 0; card.setAttribute('role', 'button'); card.addEventListener('click', () => showLightbox(index, card)); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showLightbox(index, card); } }); });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close()); lightbox.querySelector('.lb-prev').addEventListener('click', () => moveLightbox(-1)); lightbox.querySelector('.lb-next').addEventListener('click', () => moveLightbox(1)); lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); }); lightbox.addEventListener('close', () => lastTrigger?.focus());
  document.addEventListener('keydown', event => { if (!lightbox.open) return; if (event.key === 'ArrowLeft') moveLightbox(-1); if (event.key === 'ArrowRight') moveLightbox(1); });
  document.querySelectorAll('[data-open-chat]').forEach(button => button.addEventListener('click', () => { lastTrigger = button; chat.showModal(); chat.querySelector('.chat-close').focus(); })); document.querySelectorAll('[data-close-chat], .chat-close').forEach(button => button.addEventListener('click', () => chat.close())); chat.addEventListener('click', event => { if (event.target === chat) chat.close(); }); chat.addEventListener('close', () => lastTrigger?.focus()); document.querySelector('#year').textContent = new Date().getFullYear();
})();

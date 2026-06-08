gsap.registerPlugin(ScrollTrigger);

/* =========================
   INITIAL LOAD ANIMATION
========================= */

gsap.from('.logo-block', {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: 'power3.out',
});

gsap.from('.eyebrow', {
  opacity: 0,
  y: 20,
  delay: 0.1,
  duration: 1,
  ease: 'power3.out',
});

gsap.from('.hero-heading', {
  opacity: 0,
  y: 30,
  delay: 0.2,
  duration: 1,
  ease: 'power3.out',
});

/* =========================
   SCROLL REVEALS
========================= */

gsap.utils.toArray('.gsap-reveal').forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
});

/* =========================
   BACKGROUND PARALLAX
========================= */

gsap.to('.orb-1', {
  y: 80,
  x: 40,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});

gsap.to('.orb-2', {
  y: -60,
  x: -30,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});

// ===============================
// CURSOR GLOW FOLLOW
// ===============================
const glow = document.querySelector('.cursor-glow');

let lastX = 0,
  lastY = 0;

document.addEventListener('mousemove', (e) => {
  lastX = e.clientX;
  lastY = e.clientY;
});

function updateGlow() {
  glow.style.left = lastX + 'px';
  glow.style.top = lastY + 'px';
  requestAnimationFrame(updateGlow);
}

updateGlow();

// ===============================
// DARK / LIGHT MODE TOGGLE
// ===============================
const btn = document.getElementById('themeBtn');

btn.addEventListener('change', () => {
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

// load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.src = '/assets/images/Fallback.svg';
  });
});

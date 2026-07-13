/* ============================================
   ✨ CUSTOMIZATION — Edit everything here ✨
   ============================================ */

const PASSWORD = "iloveyou";

const LOVE_LETTER = `My Love,

Thank you for filling my life with happiness.
Every smile, every laugh, every moment with you has become my favorite memory.
No matter what happens, I'll always choose you.
I love you more than words can ever explain.

Forever Yours ❤️`;

// Relationship start: 22 March 2026 | Marriage: 21 November 2026
const RELATIONSHIP_START = new Date(2026, 2, 22);
const MARRIAGE_DATE = new Date(2026, 10, 21);

const LAUGHS = 10000;

const REASONS = [
  "Your smile",
  "Your kindness",
  "Your laugh",
  "Your eyes",
  "Your hugs",
  "Your honesty",
  "Your support",
  "Your heart",
  "Your dreams",
  "Everything about you"
];

const MEMORIES = [
  {
    title: "First Meet",
    icon: "❤️",
    text: "The day everything changed...",
    image: "images/firstmeet.jpg"
  },
  {
    title: "Favourite Photo",
    icon: "📸",
    text: "One picture... countless memories.",
    image: "images/favourite.png"
  },
  {
    title: "Our Best Day",
    icon: "🌸",
    text: "Still my favorite memory.",
    image: "images/bestday.png"
  },
  {
    title: "We Together",
    icon: "✨",
    text: "Forever starts every single day.",
    image: "images/we.png"
  }
];

const LOVE_NOTES = [
  "You make ordinary days unforgettable.",
  "You are my peace.",
  "My favorite place is wherever you are.",
  "I'd choose you in every lifetime."
];

const GALLERY_PHOTOS = [
  "images/IMG_3235.JPG",
  "images/IMG_3237.JPG",
  "images/IMG_3238.JPG",
  "images/IMG_3247.JPG",
  "images/IMG_3217.JPG",
  "images/IMG_3220.JPG",
  "images/my.jpeg"
];

// Days between two dates (inclusive — start day counts as day 1)
function daysBetweenInclusive(fromDate, toDate) {
  const from = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  const to = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(0, Math.floor((to - from) / msPerDay) + 1);
}

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getDaysTogether() {
  const today = normalizeDate(new Date());
  const start = normalizeDate(RELATIONSHIP_START);
  if (today < start) return 0;
  return daysBetweenInclusive(RELATIONSHIP_START, today);
}

function getMarriageCounter() {
  const today = normalizeDate(new Date());
  const marriage = normalizeDate(MARRIAGE_DATE);

  if (today < marriage) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return {
      label: "Days Until Marriage",
      value: Math.floor((marriage - today) / msPerDay)
    };
  }

  return {
    label: "Days Married",
    value: daysBetweenInclusive(MARRIAGE_DATE, today)
  };
}

function buildCounterData() {
  const marriage = getMarriageCounter();

  return [
    { label: "Days Together", value: getDaysTogether() },
    { label: marriage.label, value: marriage.value },
    { label: "Laughs Shared", value: LAUGHS }
  ];
}

/* ============================================
   DOM References
   ============================================ */

const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordSubmit = document.getElementById("password-submit");
const passwordError = document.getElementById("password-error");
const mainSite = document.getElementById("main-site");

/* ============================================
   Password Screen
   ============================================ */

function checkPassword() {
  const entered = passwordInput.value.trim();

  if (entered === PASSWORD) {
    passwordError.classList.remove("show");
    passwordScreen.classList.add("fade-out");

    setTimeout(() => {
      passwordScreen.style.display = "none";
      mainSite.classList.remove("hidden");
      mainSite.classList.add("visible");
      initMainSite();
    }, 800);
  } else {
    passwordError.textContent = "That's not quite right... try again, my love 💕";
    passwordError.classList.add("show");
    passwordInput.value = "";
    passwordInput.focus();

    // Shake the input wrapper
    passwordInput.style.animation = "none";
    passwordInput.offsetHeight; // trigger reflow
    passwordInput.style.animation = "shake 0.5s ease";
  }
}

passwordSubmit.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});

// Focus password input on load
passwordInput.focus();

/* ============================================
   Main Site Initialization
   ============================================ */

let siteInitialized = false;

function initMainSite() {
  if (siteInitialized) return;
  siteInitialized = true;

  createFloatingHearts();
  createParticles();
  buildTimeline();
  buildGallery();
  buildLoveNotes();
  buildCounters();
  buildReasons();
  initScrollAnimations();
  initTypewriter();
  initMusicPlayer();
  initLightbox();
  initSurprise();
  initEndingAnimation();
}

/* ============================================
   Floating Hearts Background
   ============================================ */

function createFloatingHearts() {
  const container = document.getElementById("hearts-container");
  const hearts = ["❤️", "💕", "💖", "💗", "🩷"];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
    heart.style.animationDuration = `${8 + Math.random() * 12}s`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(heart);
  }
}

/* ============================================
   Glowing Particles
   ============================================ */

function createParticles() {
  const container = document.getElementById("particles-container");

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${3 + Math.random() * 4}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.width = `${2 + Math.random() * 4}px`;
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

/* ============================================
   Build Timeline Cards
   ============================================ */

function buildTimeline() {
  const container = document.getElementById("timeline-cards");

  MEMORIES.forEach((memory) => {
    const card = document.createElement("div");
    card.className = "timeline-card";
    const imageMarkup = memory.image
      ? `<div class="timeline-image-wrap">
           <img class="timeline-image" src="${memory.image}" alt="${memory.title}" loading="lazy">
         </div>`
      : "";

    card.innerHTML = `
      <div class="timeline-icon">${memory.icon}</div>
      <h3>${memory.title}</h3>
      <p>"${memory.text}"</p>
      ${imageMarkup}
    `;
    container.appendChild(card);
  });
}

/* ============================================
   Build Photo Gallery
   ============================================ */

function buildGallery() {
  const grid = document.getElementById("gallery-grid");

  GALLERY_PHOTOS.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.index = index;
    item.innerHTML = `<img src="${src}" alt="Memory ${index + 1}" loading="lazy">`;
    item.addEventListener("click", () => openLightbox(index));
    grid.appendChild(item);
  });
}

/* ============================================
   Build Love Notes
   ============================================ */

function buildLoveNotes() {
  const grid = document.getElementById("notes-grid");

  LOVE_NOTES.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.textContent = note;
    grid.appendChild(card);
  });
}

/* ============================================
   Build Memory Counters
   ============================================ */

function buildCounters() {
  const grid = document.getElementById("counter-grid");
  const counters = buildCounterData();

  counters.forEach((counter) => {
    const card = document.createElement("div");
    card.className = "counter-card";
    card.innerHTML = `
      <span class="counter-number" data-target="${counter.value}">0</span>
      <span class="counter-label">${counter.label}</span>
    `;
    grid.appendChild(card);
  });
}

/* ============================================
   Build Reasons Cards
   ============================================ */

function buildReasons() {
  const grid = document.getElementById("reasons-grid");

  REASONS.forEach((reason) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerHTML = `
      <span class="heart-icon">❤️</span>
      ${reason}
    `;
    grid.appendChild(card);
  });
}

/* ============================================
   Intersection Observer — Scroll Animations
   ============================================ */

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll(".reveal, .timeline-card, .gallery-item, .note-card, .counter-card, .reason-card").forEach((el) => {
    revealObserver.observe(el);
  });

  // Counter animation observer
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberEl = entry.target.querySelector(".counter-number");
        if (numberEl && !numberEl.dataset.animated) {
          numberEl.dataset.animated = "true";
          animateCounter(numberEl);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".counter-card").forEach((card) => {
    counterObserver.observe(card);
  });
}

/* ============================================
   Animated Counter
   ============================================ */

function animateCounter(element) {
  const target = parseInt(element.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

/* ============================================
   Typewriter Effect
   ============================================ */

function initTypewriter() {
  const textEl = document.getElementById("typewriter-text");
  const cursorEl = document.getElementById("typewriter-cursor");
  let started = false;

  const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        typewrite(LOVE_LETTER, textEl, cursorEl);
      }
    });
  }, { threshold: 0.3 });

  letterObserver.observe(document.getElementById("letter"));
}

function typewrite(text, element, cursor) {
  let index = 0;
  const speed = 40;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      cursor.classList.add("done");
    }
  }

  type();
}

/* ============================================
   Music Player
   ============================================ */

function initMusicPlayer() {
  const audio = document.getElementById("audio");
  const toggleBtn = document.getElementById("music-toggle");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const player = document.getElementById("music-player");
  let hasInteracted = false;

  function togglePlay() {
    hasInteracted = true;

    if (audio.paused) {
      audio.play().catch(() => {
        // Autoplay blocked or file missing — silent fail
      });
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
      player.classList.remove("paused");
    } else {
      audio.pause();
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
      player.classList.add("paused");
    }
  }

  toggleBtn.addEventListener("click", togglePlay);

  // Start paused state
  player.classList.add("paused");
}

/* ============================================
   Photo Lightbox
   ============================================ */

let currentPhotoIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navigateLightbox(-1));
  nextBtn.addEventListener("click", () => navigateLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentPhotoIndex = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");

  img.src = GALLERY_PHOTOS[index];
  counter.textContent = `${index + 1} / ${GALLERY_PHOTOS.length}`;

  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Re-trigger zoom animation
  const content = lightbox.querySelector(".lightbox-content");
  content.style.animation = "none";
  content.offsetHeight;
  content.style.animation = "zoomIn 0.4s ease";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  currentPhotoIndex = (currentPhotoIndex + direction + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
  openLightbox(currentPhotoIndex);
}

/* ============================================
   Surprise Button — Hearts & Confetti
   ============================================ */

function initSurprise() {
  const btn = document.getElementById("surprise-btn");
  btn.addEventListener("click", triggerSurprise);
}

function triggerSurprise() {
  const overlay = document.getElementById("surprise-overlay");
  const confettiContainer = document.getElementById("confetti-container");
  const heartsContainer = document.getElementById("explosion-hearts");

  // Clear previous animations
  confettiContainer.innerHTML = "";
  heartsContainer.innerHTML = "";

  overlay.classList.remove("hidden");
  overlay.classList.add("active");

  // Create confetti
  const colors = ["#ff8fab", "#fb6f92", "#ffc2d1", "#c9184a", "#fff0f3", "#e63946"];
  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${6 + Math.random() * 8}px`;
    confettiContainer.appendChild(piece);
  }

  // Create exploding hearts
  const heartEmojis = ["❤️", "💕", "💖", "💗", "🩷", "💝"];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.className = "explosion-heart";
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = "50%";
    heart.style.top = "50%";
    const angle = (Math.PI * 2 * i) / 30;
    const distance = 150 + Math.random() * 300;
    heart.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
    heart.style.animationDelay = `${Math.random() * 0.3}s`;
    heartsContainer.appendChild(heart);
  }

  // Auto-close after 5 seconds
  setTimeout(() => {
    overlay.classList.remove("active");
    setTimeout(() => overlay.classList.add("hidden"), 500);
  }, 5000);

  // Click to dismiss
  overlay.addEventListener("click", function dismiss() {
    overlay.classList.remove("active");
    setTimeout(() => overlay.classList.add("hidden"), 500);
    overlay.removeEventListener("click", dismiss);
  });
}

/* ============================================
   Ending Section Animation
   ============================================ */

function initEndingAnimation() {
  const lines = document.querySelectorAll(".ending-line");

  const endingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add("visible"), i * 600);
        });
        endingObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  endingObserver.observe(document.getElementById("ending"));
}

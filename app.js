/**
 * DISHA & ME - SISTERHOOD EXPERIENCE INTERACTIVE ENGINE
 * Ultra-Professional Dusky Rose Quartz Atmosphere, Background Slider & Particle Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  // Verify STORY_CONFIG availability
  if (typeof STORY_CONFIG === "undefined") {
    console.error("STORY_CONFIG not loaded from content.js");
    return;
  }

  const config = STORY_CONFIG;

  /* ==========================================================================
     0. BACKGROUND PHOTO AUTO-SLIDER ENGINE
     ========================================================================== */
  const bgSliderTrack = document.getElementById("bg-slider-track");
  let currentSlideIndex = 0;
  let bgSlideElements = [];

  if (bgSliderTrack && config.gallery && config.gallery.photos) {
    config.gallery.photos.forEach((photoObj, idx) => {
      const slide = document.createElement("div");
      slide.className = `bg-slide ${idx === 0 ? "active" : ""}`;
      slide.innerHTML = `<img src="${photoObj.url}" alt="${photoObj.caption}">`;
      bgSliderTrack.appendChild(slide);
      bgSlideElements.push(slide);
    });

    // Auto-advance background slider every 6 seconds with smooth crossfade & Ken Burns effect
    setInterval(() => {
      if (bgSlideElements.length === 0) return;
      bgSlideElements[currentSlideIndex].classList.remove("active");
      currentSlideIndex = (currentSlideIndex + 1) % bgSlideElements.length;
      bgSlideElements[currentSlideIndex].classList.add("active");
    }, 6000);
  }

  /* ==========================================================================
     1. MULTI-ATMOSPHERE DUSKY PINK CANVAS PARTICLE SYSTEM
     ========================================================================== */
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let burstParticles = [];
  let currentAtmosphere = "good"; // 'good', 'difficult', 'reconnect'

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.8 + 0.6;

      if (currentAtmosphere === "difficult") {
        // Falling dusky lavender particles
        this.speedY = Math.random() * 1.8 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.45 + 0.15;
        this.color = "rgba(216, 180, 254, ";
      } else if (currentAtmosphere === "reconnect") {
        // Warm rising champagne rose light
        this.speedY = -(Math.random() * 0.85 + 0.25);
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.8 + 0.25;
        this.color = Math.random() > 0.5 ? "rgba(247, 214, 200, " : "rgba(255, 133, 162, ";
      } else {
        // Good phase: floating soft pink & rose gold sparkles
        this.speedY = -(Math.random() * 0.5 + 0.12);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.color = Math.random() > 0.4 ? "rgba(255, 133, 162, " : "rgba(247, 214, 200, ";
      }
      this.pulse = Math.random() * 0.02 + 0.005;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.opacity += Math.sin(Date.now() * this.pulse) * 0.006;

      if (this.y < -10 || this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
        if (this.speedY < 0) this.y = canvas.height + 10;
        else this.y = -10;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + Math.max(0, Math.min(1, this.opacity)) + ")";
      ctx.shadowBlur = currentAtmosphere === "reconnect" ? 14 : 8;
      ctx.shadowColor = this.color + "0.6)";
      ctx.fill();
    }
  }

  // Initialize 75 particles
  for (let i = 0; i < 75; i++) {
    particles.push(new Particle());
  }

  function setAtmosphere(mode) {
    if (currentAtmosphere === mode) return;
    currentAtmosphere = mode;
    document.body.classList.remove("atmosphere-good", "atmosphere-difficult", "atmosphere-reconnect");
    document.body.classList.add(`atmosphere-${mode}`);
    particles.forEach(p => p.reset());
  }

  class BurstParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 4;
      this.speedX = (Math.random() - 0.5) * 6;
      this.speedY = (Math.random() - 0.5) * 6 - 2;
      this.gravity = 0.1;
      this.opacity = 1;
      this.color = Math.random() > 0.5 ? "rgba(255, 133, 162, " : "rgba(247, 214, 200, ";
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.speedY += this.gravity;
      this.opacity -= 0.015;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color + "1)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function triggerBurst(x, y) {
    for (let i = 0; i < 35; i++) {
      burstParticles.push(new BurstParticle(x, y));
    }
  }

  function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    for (let i = burstParticles.length - 1; i >= 0; i--) {
      const bp = burstParticles[i];
      bp.update();
      bp.draw();
      if (bp.opacity <= 0) {
        burstParticles.splice(i, 1);
      }
    }

    requestAnimationFrame(renderCanvas);
  }
  renderCanvas();

  /* ==========================================================================
     2. AUDIO ENGINE (PLAYING "UNTIL I FOUND YOU")
     ========================================================================== */
  const audioBtn = document.getElementById("audio-control");
  const audioStatus = document.getElementById("audio-status");
  const bgAudio = document.getElementById("bg-audio");
  let isAudioPlaying = false;
  let synthInterval = null;

  function playSynthMusicFallback() {
    if (synthInterval) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [261.63, 329.63, 392.00, 440.00, 523.25];
      let noteIndex = 0;
      synthInterval = setInterval(() => {
        if (!isAudioPlaying) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.8);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.8);
        noteIndex++;
      }, 1200);
    } catch (e) {
      console.log("Synth audio fallback failed", e);
    }
  }

  function toggleAudio() {
    if (!isAudioPlaying) {
      bgAudio.play().then(() => {
        isAudioPlaying = true;
        audioBtn.classList.add("playing");
        audioStatus.textContent = "🎵 Playing: Until I Found You";
      }).catch(err => {
        console.log("Audio file auto-play blocked or waiting for interaction:", err);
        isAudioPlaying = true;
        audioBtn.classList.add("playing");
        audioStatus.textContent = "🎵 Playing: Until I Found You";
        playSynthMusicFallback();
      });
    } else {
      bgAudio.pause();
      isAudioPlaying = false;
      audioBtn.classList.remove("playing");
      audioStatus.textContent = "🎵 Play: Until I Found You";
      if (synthInterval) {
        clearInterval(synthInterval);
        synthInterval = null;
      }
    }
  }

  audioBtn.addEventListener("click", toggleAudio);

  /* ==========================================================================
     3. OPENING SCREEN & START
     ========================================================================== */
  const startBtn = document.getElementById("btn-start-experience");
  const openingScreen = document.getElementById("opening-screen");

  startBtn.addEventListener("click", (e) => {
    openingScreen.classList.add("hidden");
    toggleAudio();
    triggerBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);
  });

  /* ==========================================================================
     4. POPULATE DOM FROM CONFIG
     ========================================================================== */
  
  // Section: Never Perfect Lines
  const npLinesContainer = document.getElementById("np-lines-container");
  if (npLinesContainer && config.neverPerfect) {
    config.neverPerfect.lines.forEach((lineText) => {
      const p = document.createElement("div");
      p.className = "np-line";
      p.textContent = lineText;
      npLinesContainer.appendChild(p);
    });
    document.getElementById("np-climax").textContent = config.neverPerfect.climax;
  }

  // Section: Chapter 05 Text Flow
  const chapterFlow = document.getElementById("chapter-text-flow");
  if (chapterFlow && config.chapterNotEasy) {
    config.chapterNotEasy.part1.forEach(txt => {
      const p = document.createElement("p");
      p.className = "flow-p highlight-good";
      p.textContent = txt;
      chapterFlow.appendChild(p);
    });

    config.chapterNotEasy.part2.forEach(txt => {
      const p = document.createElement("p");
      p.className = "flow-p highlight-hard";
      p.textContent = txt;
      chapterFlow.appendChild(p);
    });

    const pauseP = document.createElement("p");
    pauseP.className = "flow-pause flow-p";
    pauseP.textContent = config.chapterNotEasy.pause;
    chapterFlow.appendChild(pauseP);

    const reconP = document.createElement("p");
    reconP.className = "flow-p highlight-good";
    reconP.style.fontSize = "1.65rem";
    reconP.style.fontWeight = "600";
    reconP.textContent = config.chapterNotEasy.reconnect;
    chapterFlow.appendChild(reconP);
  }

  // Section: Growing Together Text
  const gtContainer = document.getElementById("gt-text-container");
  if (gtContainer && config.growingTogether) {
    config.growingTogether.text.forEach(t => {
      const p = document.createElement("p");
      p.textContent = t;
      gtContainer.appendChild(p);
    });
  }

  // Section: Final Letter
  const letterBody = document.getElementById("letter-body-container");
  if (letterBody && config.finalLetter) {
    config.finalLetter.paragraphs.forEach(pText => {
      const p = document.createElement("p");
      p.textContent = pText;
      letterBody.appendChild(p);
    });
  }

  // Section: Climax Sisterhood Wish
  const climaxLinesContainer = document.getElementById("climax-lines-container");
  if (climaxLinesContainer && config.finalWish) {
    config.finalWish.lines.forEach(line => {
      const p = document.createElement("p");
      p.textContent = line;
      climaxLinesContainer.appendChild(p);
    });
    document.getElementById("climax-core-wish").textContent = config.finalWish.coreWish;
    document.getElementById("climax-bday-title").textContent = config.finalWish.finalTitle;
    document.getElementById("climax-footer1").textContent = config.finalWish.footerQuote1;
    document.getElementById("climax-footer2").textContent = config.finalWish.footerQuote2;
  }

  /* ==========================================================================
     5. DYNAMIC MEMORY TIMELINE FILTER & RENDERING
     ========================================================================== */
  const timelineContainer = document.getElementById("timeline-cards-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderTimeline(filter = "all") {
    timelineContainer.innerHTML = "";
    const items = config.timeline.items.filter(item => {
      if (filter === "all") return true;
      return item.type === filter;
    });

    items.forEach((item, index) => {
      const isEven = index % 2 === 0;
      const card = document.createElement("div");
      card.className = `timeline-card ${item.type}-card ${isEven ? "left" : "right"}`;

      card.innerHTML = `
        <div class="tc-type-tag ${item.type}">
          ${item.type === "good" ? "🌸 Good Days Phase" : "🌙 Reflective / Hard Phase"}
        </div>
        <div class="tc-year">${item.year}</div>
        <div class="tc-title">${item.title}</div>
        <div class="tc-img-box">
          <img src="${item.photo}" alt="${item.title}" loading="lazy">
        </div>
        <div class="tc-caption">"${item.caption}"</div>
        <div class="tc-message">${item.message}</div>
      `;

      card.addEventListener("click", () => {
        openLightbox(item.photo, `${item.year} - ${item.title}: "${item.caption}"`);
      });

      timelineContainer.appendChild(card);
    });
  }

  renderTimeline("all");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderTimeline(filter);

      if (filter === "hard") {
        setAtmosphere("difficult");
      } else if (filter === "good") {
        setAtmosphere("good");
      }
    });
  });

  /* ==========================================================================
     6. MEMORY VAULT GALLERY & LIGHTBOX
     ========================================================================== */
  const galleryGrid = document.getElementById("gallery-grid-container");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  if (galleryGrid && config.gallery) {
    config.gallery.photos.forEach((photoObj) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <img src="${photoObj.url}" alt="${photoObj.caption}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-caption">${photoObj.caption}</span>
        </div>
      `;
      item.addEventListener("click", () => {
        openLightbox(photoObj.url, photoObj.caption);
      });
      galleryGrid.appendChild(item);
    });
  }

  function openLightbox(url, caption) {
    lightboxImg.src = url;
    lightboxCaption.textContent = caption;
    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
  }

  lightboxClose.addEventListener("click", () => {
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
  });

  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove("active");
      lightboxModal.setAttribute("aria-hidden", "true");
    }
  });

  /* ==========================================================================
     7. SCROLL INTERSECTION OBSERVER & ATMOSPHERE ENGINE
     ========================================================================== */
  const scrollProgress = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        const id = entry.target.id;
        if (id === "chapter-upsdowns") {
          setAtmosphere("difficult");
        } else if (id === "came-back") {
          setAtmosphere("reconnect");
          triggerBurst(window.innerWidth / 2, window.innerHeight / 2);
        } else if (id === "climax-finale" || id === "hero") {
          setAtmosphere("good");
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".np-line, .flow-p, section").forEach(el => {
    observer.observe(el);
  });

  /* ==========================================================================
     8. REPLAY & CELEBRATE BUTTONS
     ========================================================================== */
  const btnReplay = document.getElementById("btn-replay");
  const btnCelebrate = document.getElementById("btn-burst-hearts");

  if (btnReplay) {
    btnReplay.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setAtmosphere("good");
    });
  }

  if (btnCelebrate) {
    btnCelebrate.addEventListener("click", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => triggerBurst(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 50), i * 150);
      }
    });
  }
});

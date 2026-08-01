/* =========================================================
   EDIT THESE — the only things you probably need to change
   ========================================================= */

// Her name — shown in the big title
const GF_NAME = "My Love";

// Countdown target — set to your next date night / anniversary / GF day
// Format: "YYYY-MM-DDTHH:MM:SS"
const COUNTDOWN_TARGET = "2026-09-14T19:00:00";
const COUNTDOWN_LABEL = "until our next date night 🌙";

// Reasons I love you — front shows a heart, back shows this text
const REASONS = [
  "Your laugh is my favorite sound",
  "You make ordinary days feel special",
  "You're the best hug in the world",
  "You always know what to say",
  "Your smile fixes my whole day",
  "You put up with my terrible jokes",
  "You're my favorite person to do nothing with",
  "You believe in me, always"
];

// Love letter text — feel free to rewrite this completely
// (already in index.html, edit it there instead of here)

// Gallery photos — put your images in assets/images/ and list filenames here
// Leave empty to show placeholder hearts instead
const GALLERY_IMAGES = [
  "assets/images/photo1.jpg",
  "assets/images/photo2.jpg",
  "assets/images/photo3.jpg",
  "assets/images/photo4.jpg",
  "assets/images/photo5.jpg",
  "assets/images/photo6.jpg",
  "assets/images/photo7.jpg",
  "assets/images/photo8.jpg",
  "assets/images/photo9.jpg",
  "assets/images/photo10.jpg",
  "assets/images/photo11.jpg",
  "assets/images/photo12.jpg",
  "assets/images/photo13.jpg"
];

/* =========================================================
   Below this line is just the logic — no need to touch it
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("gfName").textContent = GF_NAME;

  initFloatingHearts();
  initEnvelope();
  initReasonCards();
  initGallery();
  initCountdown();
  initLoveMeter();
});

/* ---------- Floating hearts background ---------- */
function initFloatingHearts() {
  const container = document.getElementById("heartsBg");
  const symbols = ["💗", "💕", "💖", "💓", "❤️"];
  const count = 22;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";
    const duration = 8 + Math.random() * 10;
    heart.style.animationDuration = duration + "s";
    heart.style.animationDelay = Math.random() * duration + "s";
    container.appendChild(heart);
  }
}

/* ---------- Intro flow: question -> message/envelope -> main site ---------- */
function initEnvelope() {
  const overlay = document.getElementById("envelopeOverlay");
  const main = document.getElementById("mainContent");

  const stageQuestion = document.getElementById("stageQuestion");
  const stageMessage = document.getElementById("stageMessage");
  const stageEnvelope = document.getElementById("stageEnvelope");

  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");
  const btnMore = document.getElementById("btnMore");
  const envelope = document.getElementById("envelope");

  function showStage(stage) {
    [stageQuestion, stageMessage, stageEnvelope].forEach((s) => s.classList.add("hidden"));
    stage.classList.remove("hidden");
  }

  // "Yes, that's plenty" -> short message with an option to unlock more
  btnYes.addEventListener("click", () => showStage(stageMessage));

  // "No, give me everything" -> straight to the envelope
  btnNo.addEventListener("click", () => showStage(stageEnvelope));

  // "Okay fine, show me more anyway" -> envelope
  btnMore.addEventListener("click", () => showStage(stageEnvelope));

  // Tapping the envelope opens the full site
  envelope.addEventListener("click", () => {
    overlay.classList.add("opened");
    main.classList.remove("hidden");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 650);
  });
}

/* ---------- Reason flip cards ---------- */
function initReasonCards() {
  const grid = document.getElementById("cardsGrid");

  REASONS.forEach((reason) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">💗</div>
        <div class="flip-card-back">${reason}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

/* ---------- Gallery ---------- */
function initGallery() {
  const grid = document.getElementById("galleryGrid");

  if (GALLERY_IMAGES.length === 0) {
    for (let i = 0; i < 6; i++) {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `<span class="gallery-placeholder">📷</span>`;
      grid.appendChild(item);
    }
    return;
  }

  GALLERY_IMAGES.forEach((src) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `<img src="${src}" alt="A memory together">`;
    grid.appendChild(item);
  });
}

/* ---------- Countdown ---------- */
function initCountdown() {
  document.getElementById("countdownLabel").textContent = COUNTDOWN_LABEL;
  const target = new Date(COUNTDOWN_TARGET).getTime();

  function update() {
    const now = Date.now();
    let diff = target - now;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
    document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("cd-mins").textContent = String(mins).padStart(2, "0");
    document.getElementById("cd-secs").textContent = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ---------- Love meter game ---------- */
function initLoveMeter() {
  const btn = document.getElementById("loveBtn");
  const fill = document.getElementById("meterFill");
  const text = document.getElementById("meterText");
  let value = 0;

  btn.addEventListener("click", () => {
    value = Math.min(value + Math.floor(Math.random() * 8) + 5, 100);
    fill.style.width = value + "%";

    if (value >= 100) {
      text.textContent = "100% — infinite, actually 💗";
      btn.textContent = "💞";
    } else {
      text.textContent = value + "%";
    }
  });
}

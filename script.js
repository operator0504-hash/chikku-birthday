const particleField = document.querySelector('#particle-field');
const heartField = document.querySelector('#heart-field');
const surpriseButton = document.querySelector('#surprise-button');
const surpriseMessage = document.querySelector('#surprise-message');
const closeButton = document.querySelector('#close-button');
const welcome = document.querySelector('.welcome');
const celebration = document.querySelector('#celebration');
const backButton = document.querySelector('#back-button');
const wishButton = document.querySelector('#wish-button');
const wishMessage = document.querySelector('#wish-message');
const petalField = document.querySelector('#petal-field');
const starField = document.querySelector('#star-field');
const storyLink = document.querySelector('#story-link');
const memoriesLink = document.querySelector('#memories-link');
const letterLink = document.querySelector('#letter-link');
const photoUpload = document.querySelector('#photo-upload');
const photoGrid = document.querySelector('#photo-grid');
const lightbox = document.querySelector('#memory-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const lightboxClose = document.querySelector('#lightbox-close');
const lightboxPrevious = document.querySelector('#lightbox-prev');
const lightboxNext = document.querySelector('#lightbox-next');
const letterExperience = document.querySelector('#letter-experience');
const letterButton = document.querySelector('#letter-button');
const letterHearts = document.querySelector('#letter-hearts');
let activePhotoIndex = 0;
const musicLink = document.querySelector('#music-link');
const finalLink = document.querySelector('#final-link');
const openWhenCards = document.querySelectorAll('.open-when-card');
const openWhenReveal = document.querySelector('#open-when-reveal');
const openWhenRevealTitle = document.querySelector('#open-when-reveal-title');
const openWhenRevealCopy = document.querySelector('#open-when-reveal-copy');
const openWhenClose = document.querySelector('#open-when-close');
const musicUpload = document.querySelector('#music-upload-input');
const birthdayAudio = document.querySelector('#birthday-audio');
const musicPlay = document.querySelector('#music-play');
const musicPause = document.querySelector('#music-pause');
const musicVolume = document.querySelector('#music-volume');
const musicPlayer = document.querySelector('#music-player');
const musicFeatureCard = document.querySelector('.music-feature-card');
const musicFeatureName = document.querySelector('#music-feature-name');
const musicFeatureStatus = document.querySelector('#music-feature-status');
const musicPlayerName = document.querySelector('#music-player-name');
const musicPlayerStatus = document.querySelector('#music-player-status');
const musicNote = document.querySelector('#music-note');
const finalStage = document.querySelector('#final-stage');
const finalButton = document.querySelector('#final-button');
const finalParticles = document.querySelector('#final-particles');
const finalFireworks = document.querySelector('#final-fireworks');
let audioObjectUrl = '';
const secretForm = document.querySelector('#secret-form');
const secretPassword = document.querySelector('#secret-password');
const secretFeedback = document.querySelector('#secret-feedback');
const secretReveal = document.querySelector('#secret-reveal');
const scratchCard = document.querySelector('#scratch-card');
const scratchCanvas = document.querySelector('#scratch-canvas');
const scratchInstruction = document.querySelector('#scratch-instruction');
const scratchStatus = document.querySelector('#scratch-status');
const couponCards = document.querySelectorAll('.coupon-card');
const couponConfirmation = document.querySelector('#coupon-confirmation');
let scratchContext;
let isScratching = false;
let scratchCheckCounter = 0;
const introScreen = document.querySelector('#intro-screen');
const introButton = document.querySelector('#intro-button');
const grandFinale = document.querySelector('#grand-finale');
const grandFinaleTyping = document.querySelector('#grand-finale-typing');
const grandFinaleButton = document.querySelector('#grand-finale-button');
const grandFinaleSignoff = document.querySelector('#grand-finale-signoff');
const grandFinaleFireworks = document.querySelector('#grand-finale-fireworks');
const grandFinalePetals = document.querySelector('#grand-finale-petals');
const grandFinaleSparkles = document.querySelector('#grand-finale-sparkles');
let finaleTypingStarted = false;

introButton.addEventListener('click', () => {
  introButton.disabled = true;
  introScreen.classList.add('is-exiting');
  introScreen.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => {
    introScreen.classList.add('is-hidden');
    document.body.classList.remove('intro-locked');
    window.scrollTo(0, 0);
  }, 900);
});

for (let index = 0; index < 34; index += 1) {
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.setProperty('--duration', `${4 + Math.random() * 6}s`);
  particle.style.setProperty('--delay', `${Math.random() * -8}s`);
  particleField.appendChild(particle);
}

for (let index = 0; index < 10; index += 1) {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = '♥';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.setProperty('--size', `${0.45 + Math.random() * 0.75}rem`);
  heart.style.setProperty('--duration', `${13 + Math.random() * 15}s`);
  heart.style.setProperty('--delay', `${Math.random() * -22}s`);
  heartField.appendChild(heart);
}

for (let index = 0; index < 24; index += 1) {
  const petal = document.createElement('span');
  petal.className = 'falling-petal';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty('--size', `${0.4 + Math.random() * 0.6}rem`);
  petal.style.setProperty('--duration', `${7 + Math.random() * 9}s`);
  petal.style.setProperty('--delay', `${Math.random() * -14}s`);
  petalField.appendChild(petal);
}

for (let index = 0; index < 26; index += 1) {
  const star = document.createElement('span');
  star.className = 'celebration-star';
  star.textContent = index % 3 === 0 ? '✦' : '·';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${8 + Math.random() * 82}%`;
  star.style.setProperty('--size', `${0.45 + Math.random() * 0.65}rem`);
  star.style.setProperty('--delay', `${Math.random() * -4}s`);
  starField.appendChild(star);
}

for (let index = 0; index < 12; index += 1) {
  const heart = document.createElement('span');
  heart.className = 'letter-heart';
  heart.textContent = '♥';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = `${Math.random() * -30}%`;
  heart.style.setProperty('--size', `${0.45 + Math.random() * 0.8}rem`);
  heart.style.setProperty('--duration', `${11 + Math.random() * 13}s`);
  heart.style.setProperty('--delay', `${Math.random() * -18}s`);
  letterHearts.appendChild(heart);
}

for (let index = 0; index < 30; index += 1) {
  const particle = document.createElement('span');
  particle.className = 'final-particle';
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.setProperty('--duration', `${4 + Math.random() * 7}s`);
  particle.style.setProperty('--delay', `${Math.random() * -8}s`);
  finalParticles.appendChild(particle);
}

for (let index = 0; index < 8; index += 1) {
  const firework = document.createElement('span');
  firework.className = 'grand-firework';
  firework.style.left = `${9 + Math.random() * 82}%`;
  firework.style.top = `${8 + Math.random() * 52}%`;
  firework.style.setProperty('--delay', `${Math.random() * -4.7}s`);
  grandFinaleFireworks.appendChild(firework);
}

for (let index = 0; index < 18; index += 1) {
  const petal = document.createElement('span');
  petal.className = 'grand-finale-petal';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty('--size', `${0.4 + Math.random() * 0.65}rem`);
  petal.style.setProperty('--duration', `${8 + Math.random() * 9}s`);
  petal.style.setProperty('--delay', `${Math.random() * -15}s`);
  grandFinalePetals.appendChild(petal);
}

for (let index = 0; index < 20; index += 1) {
  const sparkle = document.createElement('span');
  sparkle.className = 'grand-finale-spark';
  sparkle.textContent = index % 4 === 0 ? '✦' : '·';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 90}%`;
  sparkle.style.setProperty('--size', `${0.45 + Math.random() * 0.7}rem`);
  sparkle.style.setProperty('--delay', `${Math.random() * -4}s`);
  grandFinaleSparkles.appendChild(sparkle);
}

for (let index = 0; index < 7; index += 1) {
  const firework = document.createElement('span');
  firework.className = 'final-firework';
  firework.style.left = `${12 + Math.random() * 76}%`;
  firework.style.top = `${12 + Math.random() * 48}%`;
  firework.style.setProperty('--delay', `${Math.random() * -3.8}s`);
  finalFireworks.appendChild(firework);
}

function toggleSurprise(isOpen) {
  surpriseMessage.classList.toggle('is-open', isOpen);
  surpriseMessage.setAttribute('aria-hidden', String(!isOpen));
  if (isOpen) closeButton.focus();
}

function showCelebration(isVisible) {
  welcome.classList.toggle('is-celebrating', isVisible);
  celebration.setAttribute('aria-hidden', String(!isVisible));
  if (isVisible) {
    window.setTimeout(() => wishButton.focus(), 850);
  } else {
    welcome.classList.remove('wish-made');
    wishButton.setAttribute('aria-pressed', 'false');
    wishButton.querySelector('span').textContent = 'Make a Wish, My Love';
    wishMessage.classList.remove('is-visible');
    wishMessage.setAttribute('aria-hidden', 'true');
    surpriseButton.focus();
  }
}

surpriseButton.addEventListener('click', () => showCelebration(true));
backButton.addEventListener('click', () => showCelebration(false));
closeButton.addEventListener('click', () => toggleSurprise(false));

wishButton.addEventListener('click', () => {
  welcome.classList.add('wish-made');
  wishButton.setAttribute('aria-pressed', 'true');
  wishMessage.setAttribute('aria-hidden', 'false');
  wishMessage.classList.add('is-visible');
  wishButton.querySelector('span').textContent = 'Wish sent with love';
});

function scrollToSection(sectionId) {
  document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

storyLink.addEventListener('click', () => scrollToSection('love-story'));
memoriesLink.addEventListener('click', () => scrollToSection('memories'));
letterLink.addEventListener('click', () => scrollToSection('special-letter'));
musicLink.addEventListener('click', () => scrollToSection('our-soundtrack'));
finalLink.addEventListener('click', () => scrollToSection('final-surprise'));

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 })
  : null;

document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add('is-visible');
});

function getPhotoCards() {
  return [...photoGrid.querySelectorAll('.photo-card')];
}

function showPhoto(index) {
  const cards = getPhotoCards();
  if (!cards.length) return;
  activePhotoIndex = (index + cards.length) % cards.length;
  const card = cards[activePhotoIndex];
  const image = card.querySelector('img');
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = card.dataset.caption;
}

function openLightbox(index) {
  showPhoto(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
}

photoGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.photo-card');
  if (card) openLightbox(getPhotoCards().indexOf(card));
});

photoUpload.addEventListener('change', (event) => {
  [...event.target.files].forEach((file) => {
    const card = document.createElement('button');
    const image = document.createElement('img');
    const caption = document.createElement('span');
    const expand = document.createElement('span');
    card.type = 'button';
    card.className = 'photo-card reveal-on-scroll is-visible';
    card.dataset.caption = 'A new page in our story.';
    image.src = URL.createObjectURL(file);
    image.alt = `Uploaded memory: ${file.name}`;
    caption.className = 'photo-caption';
    caption.textContent = card.dataset.caption;
    expand.className = 'photo-expand';
    expand.setAttribute('aria-hidden', 'true');
    expand.textContent = '↗';
    card.append(image, caption, expand);
    photoGrid.appendChild(card);
  });
  photoUpload.value = '';
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrevious.addEventListener('click', () => showPhoto(activePhotoIndex - 1));
lightboxNext.addEventListener('click', () => showPhoto(activePhotoIndex + 1));

letterButton.addEventListener('click', () => {
  const isOpen = letterExperience.classList.toggle('is-open');
  letterButton.setAttribute('aria-expanded', String(isOpen));
  letterButton.querySelector('span').textContent = isOpen ? 'Close My Letter' : 'Open My Letter';
});

function closeOpenWhenMessage() {
  openWhenReveal.classList.remove('is-open');
  openWhenReveal.setAttribute('aria-hidden', 'true');
}

openWhenCards.forEach((card) => {
  card.addEventListener('click', () => {
    openWhenRevealTitle.textContent = card.dataset.title;
    openWhenRevealCopy.textContent = card.dataset.message;
    openWhenReveal.classList.add('is-open');
    openWhenReveal.setAttribute('aria-hidden', 'false');
    openWhenClose.focus();
  });
});

openWhenClose.addEventListener('click', closeOpenWhenMessage);

function updateMusicState(isPlaying) {
  musicPlayer.classList.toggle('is-playing', isPlaying);
  musicFeatureCard.classList.toggle('is-playing', isPlaying);
  musicPlayerStatus.textContent = isPlaying ? 'Playing your song' : 'Music paused';
  musicFeatureStatus.textContent = isPlaying ? 'Playing your song' : 'Ready when you are';
}

musicUpload.addEventListener('change', (event) => {
  const [file] = event.target.files;
  if (!file) return;
  if (!file.type.startsWith('audio/')) {
    musicNote.textContent = 'That file could not be played. Please choose an MP3, WAV, or OGG audio file.';
    musicUpload.value = '';
    return;
  }
  if (audioObjectUrl) URL.revokeObjectURL(audioObjectUrl);
  audioObjectUrl = URL.createObjectURL(file);
  birthdayAudio.src = audioObjectUrl;
  birthdayAudio.volume = Number(musicVolume.value);
  const songName = file.name.replace(/\.[^/.]+$/, '');
  musicFeatureName.textContent = songName;
  musicPlayerName.textContent = songName;
  musicFeatureStatus.textContent = 'Ready when you are';
  musicPlayerStatus.textContent = 'Ready to play';
  musicPlay.disabled = false;
  musicPause.disabled = false;
  musicNote.textContent = 'Your music is private to this page and never uploaded anywhere.';
  musicUpload.value = '';
});

musicPlay.addEventListener('click', async () => {
  try {
    await birthdayAudio.play();
    updateMusicState(true);
  } catch (error) {
    musicNote.textContent = 'This audio file could not be played in your browser. Try another file.';
    updateMusicState(false);
  }
});
musicPause.addEventListener('click', () => {
  birthdayAudio.pause();
  updateMusicState(false);
});
musicVolume.addEventListener('input', () => { birthdayAudio.volume = Number(musicVolume.value); });
birthdayAudio.addEventListener('play', () => updateMusicState(true));
birthdayAudio.addEventListener('pause', () => updateMusicState(false));
birthdayAudio.addEventListener('ended', () => updateMusicState(false));
birthdayAudio.addEventListener('error', () => {
  musicNote.textContent = 'This audio file could not be read. Please choose another personal song.';
  musicPlay.disabled = true;
  musicPause.disabled = true;
  updateMusicState(false);
});

finalButton.addEventListener('click', () => {
  const isOpen = finalStage.classList.toggle('is-open');
  finalButton.setAttribute('aria-expanded', String(isOpen));
  finalButton.querySelector('span').textContent = isOpen ? 'The surprise is yours' : 'Open Your Final Surprise';
});

secretForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const isCorrect = secretPassword.value === '0504';
  secretFeedback.classList.remove('is-error');
  if (isCorrect) {
    secretReveal.classList.add('is-unlocked');
    secretReveal.setAttribute('aria-hidden', 'false');
    secretFeedback.textContent = 'Unlocked with love, just as promised. ♥';
    secretPassword.disabled = true;
    secretForm.querySelector('button').disabled = true;
  } else {
    secretFeedback.textContent = "Oops! That's not our secret code, my love. Try again! ❤️";
    secretFeedback.classList.add('is-error');
    secretPassword.select();
  }
});

function drawScratchSurface() {
  const bounds = scratchCard.getBoundingClientRect();
  const pixelRatio = window.devicePixelRatio || 1;
  scratchCanvas.width = bounds.width * pixelRatio;
  scratchCanvas.height = bounds.height * pixelRatio;
  scratchContext = scratchCanvas.getContext('2d', { willReadFrequently: true });
  scratchContext.scale(pixelRatio, pixelRatio);
  const coverGradient = scratchContext.createLinearGradient(0, 0, bounds.width, bounds.height);
  coverGradient.addColorStop(0, '#d13b5e');
  coverGradient.addColorStop(0.5, '#8e1234');
  coverGradient.addColorStop(1, '#5e0b26');
  scratchContext.fillStyle = coverGradient;
  scratchContext.fillRect(0, 0, bounds.width, bounds.height);
  scratchContext.fillStyle = 'rgba(255, 208, 216, 0.1)';
  for (let index = -bounds.height; index < bounds.width + bounds.height; index += 26) {
    scratchContext.save();
    scratchContext.translate(index, 0);
    scratchContext.rotate(-0.45);
    scratchContext.fillRect(0, 0, 10, bounds.height * 2);
    scratchContext.restore();
  }
  scratchContext.fillStyle = 'rgba(255, 223, 229, 0.5)';
  for (let index = 0; index < 85; index += 1) {
    scratchContext.beginPath();
    scratchContext.arc(Math.random() * bounds.width, Math.random() * bounds.height, Math.random() * 1.6 + 0.5, 0, Math.PI * 2);
    scratchContext.fill();
  }
}

function scratchAt(event) {
  if (!scratchContext || scratchCard.classList.contains('is-revealed')) return;
  const bounds = scratchCanvas.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  scratchContext.save();
  scratchContext.globalCompositeOperation = 'destination-out';
  scratchContext.beginPath();
  scratchContext.arc(x, y, 25, 0, Math.PI * 2);
  scratchContext.fill();
  scratchContext.restore();
  scratchCheckCounter += 1;
  if (scratchCheckCounter % 12 === 0) checkScratchProgress();
}

function checkScratchProgress() {
  const pixels = scratchContext.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height).data;
  let clearPixels = 0;
  for (let index = 3; index < pixels.length; index += 4) {
    if (pixels[index] < 40) clearPixels += 1;
  }
  if (clearPixels / (pixels.length / 4) > 0.42) {
    scratchCard.classList.add('is-revealed');
    scratchInstruction.textContent = 'A little love, revealed. ♥';
    scratchStatus.textContent = 'You found the hidden birthday message.';
  }
}

scratchCanvas.addEventListener('pointerdown', (event) => {
  isScratching = true;
  scratchCanvas.setPointerCapture(event.pointerId);
  scratchAt(event);
});
scratchCanvas.addEventListener('pointermove', (event) => { if (isScratching) scratchAt(event); });
scratchCanvas.addEventListener('pointerup', () => { isScratching = false; });
scratchCanvas.addEventListener('pointercancel', () => { isScratching = false; });
drawScratchSurface();
window.addEventListener('resize', () => { if (!scratchCard.classList.contains('is-revealed')) drawScratchSurface(); });

couponCards.forEach((card) => {
  const redeemButton = card.querySelector('.redeem-button');
  redeemButton.addEventListener('click', () => {
    const couponTitle = card.querySelector('h3').textContent;
    card.classList.add('is-redeemed');
    redeemButton.textContent = 'Redeemed ♥';
    couponConfirmation.textContent = `${couponTitle} is yours, my love. Come collect it whenever you want!`;
    couponConfirmation.classList.remove('is-visible');
    window.requestAnimationFrame(() => couponConfirmation.classList.add('is-visible'));
  });
});

function startFinaleTyping() {
  if (finaleTypingStarted) return;
  finaleTypingStarted = true;
  const message = 'You will always be my favourite person. ❤️';
  let characterIndex = 0;
  const typeNextCharacter = () => {
    grandFinaleTyping.textContent = message.slice(0, characterIndex);
    characterIndex += 1;
    if (characterIndex <= message.length) {
      window.setTimeout(typeNextCharacter, message[characterIndex - 1] === ' ' ? 35 : 62);
    } else {
      window.setTimeout(() => grandFinale.classList.add('is-ready'), 450);
    }
  };
  typeNextCharacter();
}

const finaleObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, observer) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        startFinaleTyping();
        observer.disconnect();
      }
    }, { threshold: 0.32 })
  : null;

if (finaleObserver) finaleObserver.observe(grandFinale);
else startFinaleTyping();

grandFinaleButton.addEventListener('click', () => {
  grandFinale.classList.add('is-exploded');
  grandFinaleSignoff.setAttribute('aria-hidden', 'false');
  grandFinaleButton.querySelector('span').textContent = 'Forever & Always';
  grandFinale.querySelectorAll('.explosion-heart').forEach((heart) => heart.remove());
  for (let index = 0; index < 24; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'explosion-heart';
    heart.textContent = index % 3 === 0 ? '♥' : '✦';
    heart.style.setProperty('--size', `${0.55 + Math.random() * 0.9}rem`);
    heart.style.setProperty('--x', `${-240 + Math.random() * 480}px`);
    heart.style.setProperty('--y', `${-210 + Math.random() * 420}px`);
    heart.style.setProperty('--rotation', `${-45 + Math.random() * 90}deg`);
    heart.style.setProperty('--delay', `${Math.random() * 0.32}s`);
    grandFinale.appendChild(heart);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') toggleSurprise(false);
  if (event.key === 'Escape' && welcome.classList.contains('is-celebrating')) showCelebration(false);
  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  if (event.key === 'Escape' && openWhenReveal.classList.contains('is-open')) closeOpenWhenMessage();
  if (lightbox.classList.contains('is-open') && event.key === 'ArrowLeft') showPhoto(activePhotoIndex - 1);
  if (lightbox.classList.contains('is-open') && event.key === 'ArrowRight') showPhoto(activePhotoIndex + 1);
});

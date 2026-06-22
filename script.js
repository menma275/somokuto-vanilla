// Fisher-Yates Shuffle algorithm to randomize the haiku list
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Get display interval from URL query parameter (default: 5 seconds)
function getDisplayInterval() {
  const urlParams = new URLSearchParams(window.location.search);
  const secParam = urlParams.get('sec');
  if (secParam) {
    const parsed = parseFloat(secParam);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed * 1000;
    }
  }
  return 5000; // 5 seconds in milliseconds
}

const DISPLAY_INTERVAL = getDisplayInterval();
let shuffledHaikus = [];
let currentIndex = 0;

function initializeHaikus() {
  if (typeof HAIKUS === 'undefined' || !Array.isArray(HAIKUS) || HAIKUS.length === 0) {
    console.error("Haiku data not found. Please ensure data.js is loaded correctly.");
    return;
  }
  shuffledHaikus = shuffleArray(HAIKUS);
  currentIndex = 0;
}

function showNextHaiku() {
  const haikuElement = document.getElementById('haiku');
  if (!haikuElement) return;

  // Re-shuffle when we have shown all haikus
  if (currentIndex >= shuffledHaikus.length) {
    const lastHaiku = shuffledHaikus[shuffledHaikus.length - 1];
    shuffledHaikus = shuffleArray(HAIKUS);
    
    // Ensure the first haiku of the new cycle isn't the same as the last one from the previous cycle
    if (shuffledHaikus[0] === lastHaiku && shuffledHaikus.length > 1) {
      const swapIndex = 1 + Math.floor(Math.random() * (shuffledHaikus.length - 1));
      [shuffledHaikus[0], shuffledHaikus[swapIndex]] = [shuffledHaikus[swapIndex], shuffledHaikus[0]];
    }
    currentIndex = 0;
  }

  const currentHaiku = shuffledHaikus[currentIndex];
  haikuElement.textContent = currentHaiku;

  // 1. Start fade-in transition
  haikuElement.classList.remove('transitioning-out');
  haikuElement.classList.add('visible');

  // 2. Schedule fade-out transition 800ms before the end of the cycle
  const fadeOutDelay = Math.max(0, DISPLAY_INTERVAL - 800);
  setTimeout(() => {
    haikuElement.classList.remove('visible');
    haikuElement.classList.add('transitioning-out');
  }, fadeOutDelay);

  // 3. Schedule next haiku switch exactly at the end of the cycle
  setTimeout(() => {
    currentIndex++;
    showNextHaiku();
  }, DISPLAY_INTERVAL);
}

// Start once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeHaikus();
  showNextHaiku();
});

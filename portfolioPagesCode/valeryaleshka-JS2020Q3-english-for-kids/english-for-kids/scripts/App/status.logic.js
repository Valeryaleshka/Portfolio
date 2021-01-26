/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
let currentPage = 0;
let isGameMode = false;
let currentaudio = '';

function setIsGameMode() {
  isGameMode = !isGameMode;
}

function setCurrentPage(page) {
  currentPage = page;
}

function setCurrentAudio(index) {
  currentaudio = index;
}
export {
  currentPage, isGameMode, setIsGameMode, setCurrentPage, setCurrentAudio, currentaudio,
};

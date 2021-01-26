/* eslint-disable no-loop-func */
import getRandom from './getRandom.function';
import cards from '../../assets/cards';
import { currentPage, currentaudio, setCurrentAudio } from './status.logic';
import mainPage from './mainPage.component';

export default function gameInit() {
  document.querySelector('body > div > div.score').innerHTML = '';

  document.querySelector('body > div > button').innerHTML = 'Start';
  const cardFlips = document.querySelectorAll('.flip-card-inner');
  const order = getRandom();
  const audios = [];
  const result = [];

  for (let i = 0; i < 8; i++) {
    cardFlips[i].classList.remove('fade');
  }

  let clickIsAvalable = true;

  for (let i = 0; i < 8; i++) {
    const audio = new Audio();
    audio.src = `./assets/${cards[currentPage][i].audioSrc}`;
    audios.push(audio);
  }

  let currentCard = audios[0];

  function* generator() {
    for (let i = 0; i < 8; i++) {
      currentCard = order[i];
      yield audios[order[i]];
    }
  }

  const incorrect = new Audio();
  incorrect.src = './assets/audio/incorrect.mp3';
  const correct = new Audio();
  correct.src = './assets/audio/correct.mp3';

  const generatorx = generator();

  function congrats() {
    if (result.every((x) => x === 0)) {
      const tempaudio = new Audio();
      tempaudio.src = './assets/audio/winning.mp3';
      tempaudio.play();
      document.querySelector('#winning').classList.remove('hidden');
      setTimeout(() => { document.querySelector('#winning').classList.add('hidden'); }, 5000);
      mainPage();
    } else {
      const tempaudio = new Audio();
      tempaudio.src = './assets/audio/lose.mp3';
      tempaudio.play();
      document.querySelector('#loser').classList.remove('hidden');
      setTimeout(() => { document.querySelector('#loser').classList.add('hidden'); }, 5000);
      mainPage();
    }
  }

  function checkRightCard(i) {
    if (currentCard === i) {
      const resolveAudioEnd = new Promise((resolve) => {
        document.querySelector('body > div > div.score').insertAdjacentHTML('afterbegin', '<div class="pass"></div>');
        clickIsAvalable = false;
        cardFlips[i].classList.add('fade');

        const el = cardFlips[i];
        const elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        result.push(0);
        correct.play();
        correct.onended = resolve;
      })
        .then(() => {
          setCurrentAudio(generatorx.next());
          if (currentaudio.done) {
            congrats();
          } else {
            const resolveAudioEndClicker = new Promise((resolve) => {
              currentaudio.value.play();
              currentaudio.value.onended = resolve;
            })
              .then(() => {
                clickIsAvalable = true;
              });
          }
        });
    } else {
      const resolveAudioEnd = new Promise((resolve) => {
        document.querySelector('body > div > div.score').insertAdjacentHTML('afterbegin', '<div class="notpass"></div>');
        clickIsAvalable = false;
        incorrect.play();
        result.push(1);
        incorrect.onended = resolve;
      })
        .then(() => {
          clickIsAvalable = true;
        });
    }
  }
  function startEventListners() {
    for (let i = 0; i < 8; i++) {
      cardFlips[order[i]].addEventListener('click', () => {
        if (clickIsAvalable) {
          checkRightCard(order[i]);
        }
      });
    }
  }

  function repeet() {
    if (clickIsAvalable) {
      currentaudio.value.play();
    }
  }

  function doublestart() {
    startEventListners();
    start();
  }

  document.querySelector('body > div > button').removeEventListener('click', repeet);

  function start() {
    if (clickIsAvalable) {
      setCurrentAudio(generatorx.next());
      currentaudio.value.play();
      document.querySelector('body > div > button').removeEventListener('click', doublestart);
      document.querySelector('body > div > button').innerHTML = 'Repeet';
      document.querySelector('body > div > button').addEventListener('click', repeet);
    }
  }

  document.querySelector('body > div > button').addEventListener('click', doublestart);
  setCurrentAudio();
}

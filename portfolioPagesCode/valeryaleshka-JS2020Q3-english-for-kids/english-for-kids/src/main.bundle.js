/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_burgerMenu_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App_mainPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _App_checkGameMod_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




(0,_App_mainPage_component__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_App_burgerMenu_logic__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_App_checkGameMod_logic__WEBPACK_IMPORTED_MODULE_2__.default)();

document.querySelector('#goTomainPage').addEventListener('click', _App_mainPage_component__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ burgerMenu
/* harmony export */ });
function burgerMenu() {
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.navToggle.addEventListener('click', (e) => { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', (e) => { hamburger.doToggle(e); });
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ mainPage
/* harmony export */ });
/* harmony import */ var _assets_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _createMainPageCard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _initiateGamePages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _status_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





function mainPage() {
  document.querySelector('body > div > nav > ul').innerHTML = '';
  document.querySelector('body > div > main').innerHTML = '';

  for (let i = 0; i < _assets_cards__WEBPACK_IMPORTED_MODULE_0__.default[0].length; i++) {
    if (i === 0) {
      document.querySelector('body > div > nav > ul').insertAdjacentHTML('beforeEnd', '<li class ="goTomainPage "id="goTomainPage">Main Page</li>');
    }
    document.querySelector('body > div.wrapper > main').insertAdjacentHTML('beforeEnd', (0,_createMainPageCard_component__WEBPACK_IMPORTED_MODULE_1__.default)(_assets_cards__WEBPACK_IMPORTED_MODULE_0__.default[0][i], _assets_cards__WEBPACK_IMPORTED_MODULE_0__.default[i + 1][0].image));
    document.querySelector('body > div > nav > ul').insertAdjacentHTML('beforeEnd', `<li>${_assets_cards__WEBPACK_IMPORTED_MODULE_0__.default[0][i]}</li>`);
  }

  document.querySelector('#goTomainPage').addEventListener('click', () => {
    (0,_status_logic__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(0);
    mainPage();
  });
  const cardFlips = document.querySelectorAll('.flip-card');
  for (let i = 0; i < cardFlips.length; i++) {
    cardFlips[i].addEventListener('click', () => {
      (0,_status_logic__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(i + 1);
      (0,_initiateGamePages_component__WEBPACK_IMPORTED_MODULE_2__.default)(i + 1);
    });
  }

  const sidebarCategories = document.querySelectorAll('li');

  for (let i = 1; i < sidebarCategories.length; i++) {
    sidebarCategories[i].addEventListener('click', () => {
      (0,_status_logic__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(i);
      (0,_initiateGamePages_component__WEBPACK_IMPORTED_MODULE_2__.default)(i);
    });
  }
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const cards = [
  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Colors', 'Vegetables'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
  [
    {
      word: 'green',
      translation: 'зеленый',
      image: 'img/green.jpg',
      audioSrc: 'audio/green.ogg',
    },
    {
      word: 'ogange',
      translation: 'оранжевый',
      image: 'img/orange.jpg',
      audioSrc: 'audio/orange.ogg',
    },
    {
      word: 'pink',
      translation: 'розовый',
      image: 'img/pink.jpg',
      audioSrc: 'audio/pink.ogg',
    },
    {
      word: 'blue',
      translation: 'синий',
      image: 'img/blue.jpg',
      audioSrc: 'audio/blue.ogg',
    },
    {
      word: 'black',
      translation: 'черный',
      image: 'img/black.jpg',
      audioSrc: 'audio/black.ogg',
    },
    {
      word: 'yellow',
      translation: 'желтый',
      image: 'img/yelloy.jpg',
      audioSrc: 'audio/yellow.ogg',
    },
    {
      word: 'white',
      translation: 'белый',
      image: 'img/white.jpg',
      audioSrc: 'audio/white.ogg',
    },
    {
      word: 'red',
      translation: 'красный',
      image: 'img/red.jpg',
      audioSrc: 'audio/red.ogg',
    },
  ],
  [
    {
      word: 'carrot',
      translation: 'морковь',
      image: 'img/vegetables/carroy.jpg',
      audioSrc: 'audio/carrot.ogg',
    },
    {
      word: 'corn',
      translation: 'кукуруза',
      image: 'img/vegetables/corn.jpg',
      audioSrc: 'audio/corn.ogg',
    },
    {
      word: 'bean',
      translation: 'фасоль',
      image: 'img/vegetables/green_bean.jpg',
      audioSrc: 'audio/bean.ogg',
    },
    {
      word: 'mushroom',
      translation: 'грибы',
      image: 'img/vegetables/mushrooms.jpg',
      audioSrc: 'audio/mushroom.ogg',
    },
    {
      word: 'onion',
      translation: 'лук',
      image: 'img/vegetables/onion.jpg',
      audioSrc: 'audio/onion.ogg',
    },
    {
      word: 'peas',
      translation: 'горох',
      image: 'img/vegetables/peas.jpg',
      audioSrc: 'audio/peas.mp3',
    },
    {
      word: 'potato',
      translation: 'бульба',
      image: 'img/vegetables/potato.jpg',
      audioSrc: 'audio/potato.mp3',
    },
    {
      word: 'tomato',
      translation: 'помидор',
      image: 'img/vegetables/tomato.jpg',
      audioSrc: 'audio/tomato.mp3',
    },
  ],
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createMainPageCard
/* harmony export */ });
function createMainPageCard(name, image) {
  const div = `
      <div class="flip-card"> 
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <card class="card">
            <img class="cardimage" src="./assets/${image}" alt="card" />
            <div class="card_english_word">${name}</div>        
          </card>
        </div>      
      </div>
    </div>`;

  return div;
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ initiateGamePages
/* harmony export */ });
/* harmony import */ var _assets_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _createDisplayedCard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _status_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _createDisplayedCardGameMode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _gameLogic_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);






function initiateGamePages(page) {
  document.querySelector('body > div > main').innerHTML = '';
  const displayedCards = [];

  if (_status_logic__WEBPACK_IMPORTED_MODULE_2__.isGameMode) {
    for (let i = 0; i < 8; i++) {
      displayedCards.push(_assets_cards__WEBPACK_IMPORTED_MODULE_0__.default[page][i]);
      document.querySelector('body > div.wrapper > main').insertAdjacentHTML('beforeEnd', (0,_createDisplayedCardGameMode_component__WEBPACK_IMPORTED_MODULE_3__.default)(displayedCards[i]));
    }
    (0,_gameLogic_function__WEBPACK_IMPORTED_MODULE_4__.default)();
  } else {
    for (let i = 0; i < 8; i++) {
      displayedCards.push(_assets_cards__WEBPACK_IMPORTED_MODULE_0__.default[page][i]);
      document.querySelector('body > div.wrapper > main').insertAdjacentHTML('beforeEnd', (0,_createDisplayedCard_component__WEBPACK_IMPORTED_MODULE_1__.default)(displayedCards[i]));
    }
    const cardsFronts = document.querySelectorAll('.flip-card-front');
    const cardArray = document.querySelectorAll('.flip-card-inner');
    const cardsAudio = document.querySelectorAll('audio');
    const buttons = document.querySelectorAll('button');
    const cardFlips = document.querySelectorAll('.flip-card');

    for (let i = 0; i < 8; i++) {
      cardsFronts[i].addEventListener('click', () => {
        cardsAudio[i].play();
      });
      buttons[i].addEventListener('click', (e) => {
        e.stopPropagation();
        cardArray[i].classList.add('rotate');
      });
      cardFlips[i].addEventListener('mouseleave', () => {
        cardArray[i].classList.remove('rotate');
      });
    }
  }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createDisplayedCard
/* harmony export */ });
function createDisplayedCard(card) {
  const div = `
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <card class="card">
        <img class="cardimage" src="./assets/${card.image}" alt="card" />
        <div class="card_english_word">${card.word}<button type="button" class="cardButoon"> <img src="./assets/img/rotate.svg"></button></div> 
        <audio src="./assets/${card.audioSrc}" preload="auto"></audio>       
      </card>
    </div>
    <div class="flip-card-back">
      <card class="card">
        <img class="cardimage" src="./assets/${card.image}" alt="card" />
        <div class="card_russion_word">${card.translation}</div>
        
      </card>
    </div>
  </div>
</div>`;

  return div;
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentPage": () => /* binding */ currentPage,
/* harmony export */   "isGameMode": () => /* binding */ isGameMode,
/* harmony export */   "setIsGameMode": () => /* binding */ setIsGameMode,
/* harmony export */   "setCurrentPage": () => /* binding */ setCurrentPage,
/* harmony export */   "setCurrentAudio": () => /* binding */ setCurrentAudio,
/* harmony export */   "currentaudio": () => /* binding */ currentaudio
/* harmony export */ });
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



/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createDisplayedCardGameMode
/* harmony export */ });
function createDisplayedCardGameMode(card) {
  const div = `
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <card class="card">
          <img class="cardimage" src="./assets/${card.image}" alt="card" />  
        </card>
      </div>     
    </div>
  </div>`;

  return div;
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ gameInit
/* harmony export */ });
/* harmony import */ var _getRandom_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _assets_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _status_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mainPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* eslint-disable no-loop-func */





function gameInit() {
  document.querySelector('body > div > div.score').innerHTML = '';

  document.querySelector('body > div > button').innerHTML = 'Start';
  const cardFlips = document.querySelectorAll('.flip-card-inner');
  const order = (0,_getRandom_function__WEBPACK_IMPORTED_MODULE_0__.default)();
  const audios = [];
  const result = [];

  for (let i = 0; i < 8; i++) {
    cardFlips[i].classList.remove('fade');
  }

  let clickIsAvalable = true;

  for (let i = 0; i < 8; i++) {
    const audio = new Audio();
    audio.src = `./assets/${_assets_cards__WEBPACK_IMPORTED_MODULE_1__.default[_status_logic__WEBPACK_IMPORTED_MODULE_2__.currentPage][i].audioSrc}`;
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
      (0,_mainPage_component__WEBPACK_IMPORTED_MODULE_3__.default)();
    } else {
      const tempaudio = new Audio();
      tempaudio.src = './assets/audio/lose.mp3';
      tempaudio.play();
      document.querySelector('#loser').classList.remove('hidden');
      setTimeout(() => { document.querySelector('#loser').classList.add('hidden'); }, 5000);
      (0,_mainPage_component__WEBPACK_IMPORTED_MODULE_3__.default)();
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
          (0,_status_logic__WEBPACK_IMPORTED_MODULE_2__.setCurrentAudio)(generatorx.next());
          if (_status_logic__WEBPACK_IMPORTED_MODULE_2__.currentaudio.done) {
            congrats();
          } else {
            const resolveAudioEndClicker = new Promise((resolve) => {
              _status_logic__WEBPACK_IMPORTED_MODULE_2__.currentaudio.value.play();
              _status_logic__WEBPACK_IMPORTED_MODULE_2__.currentaudio.value.onended = resolve;
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
      _status_logic__WEBPACK_IMPORTED_MODULE_2__.currentaudio.value.play();
    }
  }

  function doublestart() {
    startEventListners();
    start();
  }

  document.querySelector('body > div > button').removeEventListener('click', repeet);

  function start() {
    if (clickIsAvalable) {
      (0,_status_logic__WEBPACK_IMPORTED_MODULE_2__.setCurrentAudio)(generatorx.next());
      _status_logic__WEBPACK_IMPORTED_MODULE_2__.currentaudio.value.play();
      document.querySelector('body > div > button').removeEventListener('click', doublestart);
      document.querySelector('body > div > button').innerHTML = 'Repeet';
      document.querySelector('body > div > button').addEventListener('click', repeet);
    }
  }

  document.querySelector('body > div > button').addEventListener('click', doublestart);
  (0,_status_logic__WEBPACK_IMPORTED_MODULE_2__.setCurrentAudio)();
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getRandom
/* harmony export */ });
function getRandom() {
  const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const newRandom = [];
  for (let j = 8; j > 0; j--) {
    const randInd = Math.floor(Math.random() * j);
    const randElem = randomNumbers.splice(randInd, 1)[0];
    newRandom.push(randElem);
  }

  return newRandom;
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ checkGameMod
/* harmony export */ });
/* harmony import */ var _status_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _initiateGamePages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



function checkGameMod() {
  document.getElementById('switchValue').addEventListener('change', (item) => {
    if (item.checked) {
      document.querySelector('body > div > button').classList.toggle('hidden');
      document.querySelector('body > div > div.score').classList.toggle('hidden');
      (0,_status_logic__WEBPACK_IMPORTED_MODULE_0__.setIsGameMode)();
      (0,_initiateGamePages_component__WEBPACK_IMPORTED_MODULE_1__.default)(_status_logic__WEBPACK_IMPORTED_MODULE_0__.currentPage);
    } else {
      (0,_status_logic__WEBPACK_IMPORTED_MODULE_0__.setIsGameMode)();
      document.querySelector('body > div > button').classList.toggle('hidden');
      document.querySelector('body > div > div.score').classList.toggle('hidden');
      if (_status_logic__WEBPACK_IMPORTED_MODULE_0__.currentPage !== 0) {
        (0,_initiateGamePages_component__WEBPACK_IMPORTED_MODULE_1__.default)(_status_logic__WEBPACK_IMPORTED_MODULE_0__.currentPage);
      }
    }
  });
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
import cards from '../../assets/cards';
import createDisplayedCard from './createDisplayedCard.component';
import { isGameMode, setIsGameMode } from './status.logic';
import createDisplayedCardGameMode from './createDisplayedCardGameMode.component';
import gameInit from './gameLogic.function';

export default function initiateGamePages(page) {
  document.querySelector('body > div > main').innerHTML = '';
  const displayedCards = [];

  if (isGameMode) {
    for (let i = 0; i < 8; i++) {
      displayedCards.push(cards[page][i]);
      document.querySelector('body > div.wrapper > main').insertAdjacentHTML('beforeEnd', createDisplayedCardGameMode(displayedCards[i]));
    }
    gameInit();
  } else {
    for (let i = 0; i < 8; i++) {
      displayedCards.push(cards[page][i]);
      document.querySelector('body > div.wrapper > main').insertAdjacentHTML('beforeEnd', createDisplayedCard(displayedCards[i]));
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

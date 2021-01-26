import cards from '../../assets/cards';
import createMainPageCard from './createMainPageCard.component';
import initiateGamePages from './initiateGamePages.component';
import { currentPage, setCurrentPage } from './status.logic';

export default function mainPage() {
  document.querySelector('body > div > nav > ul').innerHTML = '';
  document.querySelector('body > div > main').innerHTML = '';

  for (let i = 0; i < cards[0].length; i++) {
    if (i === 0) {
      document.querySelector('body > div > nav > ul').insertAdjacentHTML('beforeEnd', '<li class ="goTomainPage "id="goTomainPage">Main Page</li>');
    }
    document.querySelector('body > div.wrapper > main').insertAdjacentHTML('beforeEnd', createMainPageCard(cards[0][i], cards[i + 1][0].image));
    document.querySelector('body > div > nav > ul').insertAdjacentHTML('beforeEnd', `<li>${cards[0][i]}</li>`);
  }

  document.querySelector('#goTomainPage').addEventListener('click', () => {
    setCurrentPage(0);
    mainPage();
  });
  const cardFlips = document.querySelectorAll('.flip-card');
  for (let i = 0; i < cardFlips.length; i++) {
    cardFlips[i].addEventListener('click', () => {
      setCurrentPage(i + 1);
      initiateGamePages(i + 1);
    });
  }

  const sidebarCategories = document.querySelectorAll('li');

  for (let i = 1; i < sidebarCategories.length; i++) {
    sidebarCategories[i].addEventListener('click', () => {
      setCurrentPage(i);
      initiateGamePages(i);
    });
  }
}

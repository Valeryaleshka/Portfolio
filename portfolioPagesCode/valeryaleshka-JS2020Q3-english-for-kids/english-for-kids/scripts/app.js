import burgerMenu from './App/burgerMenu.logic';
import mainPage from './App/mainPage.component';
import checkGameMod from './App/checkGameMod.logic';

mainPage();
burgerMenu();
checkGameMod();

document.querySelector('#goTomainPage').addEventListener('click', mainPage);

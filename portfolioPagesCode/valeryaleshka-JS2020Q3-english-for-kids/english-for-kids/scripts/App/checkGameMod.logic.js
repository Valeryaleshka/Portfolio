import { setIsGameMode, currentPage } from './status.logic';
import initiateGamePages from './initiateGamePages.component';

export default function checkGameMod() {
  document.getElementById('switchValue').addEventListener('change', (item) => {
    if (item.checked) {
      document.querySelector('body > div > button').classList.toggle('hidden');
      document.querySelector('body > div > div.score').classList.toggle('hidden');
      setIsGameMode();
      initiateGamePages(currentPage);
    } else {
      setIsGameMode();
      document.querySelector('body > div > button').classList.toggle('hidden');
      document.querySelector('body > div > div.score').classList.toggle('hidden');
      if (currentPage !== 0) {
        initiateGamePages(currentPage);
      }
    }
  });
}

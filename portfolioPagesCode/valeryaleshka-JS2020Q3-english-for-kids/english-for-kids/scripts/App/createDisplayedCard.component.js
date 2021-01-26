export default function createDisplayedCard(card) {
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

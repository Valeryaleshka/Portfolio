export default function createDisplayedCardGameMode(card) {
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

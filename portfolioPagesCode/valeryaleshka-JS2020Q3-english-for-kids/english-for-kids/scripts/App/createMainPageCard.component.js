export default function createMainPageCard(name, image) {
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

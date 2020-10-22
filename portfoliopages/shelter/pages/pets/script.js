
let btnNext = document.querySelector("#btn-next");
let btnNextAll = document.querySelector("#btn-next-all");
let pageNumber = document.querySelector("#page-number");
let btnPrev = document.querySelector("#btn-prev");
let btnPrevAll = document.querySelector("#btn-prev-all");
let slider = document.querySelector("#sliderPets");
let btnNext2 = document.querySelector("#btn-next2");
let btnPrev2 = document.querySelector("#btn-prev2");
let navmenu = document.querySelector("#headerPets > div.headerNavMenuBurger");
let mydata = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
let minSliderPosition;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


document
  .querySelector("#headerPets > div.burger")
  .addEventListener("click", slideToLeft);
document
  .querySelector(
    "#headerPets > div.headerNavMenuBurger > div.header > div.burger"
  )
  .addEventListener("click", slideToRight);
document
  .querySelector("#headerPets > div.burger")
  .addEventListener("click", burgerFontOn);
document
  .querySelector(
    "#headerPets > div.headerNavMenuBurger > div.header > div.burger"
  )
  .addEventListener("click", burgerFontOff);
btnPrevAll.addEventListener("click", movePrevAll);
btnNextAll.addEventListener("click", moveNextAll);
btnPrev.addEventListener("click", moveNext);
btnNext.addEventListener("click", movePrev);
btnPrev2.addEventListener("click", moveNext);
btnNext2.addEventListener("click", movePrev);

window.addEventListener('resize', resiseFunction);

let margin = 0;
let page = 1;
let isEnable = true;
let status = 0;
let desktop = false;
let tablet = false;
let smartphone = false;

console.log(window.innerWidth);

const pet = {
  name: "Jennifer",
  img: "../../assets/images/mainPage/Katrine.png",
  type: "dog",
  breed: "Labrador",
  description:
    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: "2 months",
  inoculations: ["none"],
  diseases: ["none"],
  parasites: ["none"],
};

active();
todo();
checkWindow()

function checkWindow() {
  if(document.documentElement.clientWidth > 1279){
    desktop = true;
    minSliderPosition = -6200;
  }
  if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1280){
    tablet = true;    
    minSliderPosition = -4340;
  }
  if(document.documentElement.clientWidth < 768){
    smartphone = true;
    minSliderPosition = -4650;
  }
}


function active() {
  if (margin === 0) {
    btnPrev.style.border = "solid 2px #CDCDCD";
    btnPrev.style.hover = "none";
    btnPrev2.style.border = "solid 2px #CDCDCD";
    btnPrev2.style.hover = "none";
    btnPrevAll.style.border = "solid 2px #CDCDCD";
    btnPrevAll.style.color = "#CDCDCD";
  } else {
    btnPrev.style.border = "solid 2px #f1cdb3";
    btnPrev2.style.border = "solid 2px #f1cdb3";
    btnPrevAll.style.border = "solid 2px #f1cdb3";
  }
  if (margin === minSliderPosition) {
    btnNext.style.border = "solid 2px #CDCDCD";
    btnNext2.style.border = "solid 2px #CDCDCD";
    btnNextAll.style.border = "solid 2px #CDCDCD";
  } else {
    btnNext.style.border = "solid 2px #f1cdb3";
    btnNext2.style.border = "solid 2px #f1cdb3";
    btnNextAll.style.border = "solid 2px #f1cdb3";
  }
}

function resiseFunction(){
  if(document.documentElement.clientWidth > 1279 && !desktop){  
    desktop = true;
    smartphone = false;
    tablet = false;
    checkWindow()
    pageZero();
    active();    
  }
  if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1280 && !tablet){
    desktop = false;
    smartphone = false;
    tablet = true;
    checkWindow()
    pageZero();
    active();    
  }
  if(document.documentElement.clientWidth < 768 && !smartphone){
    desktop = false;
    smartphone = true;
    tablet = false;
    checkWindow()
    pageZero();
    active();  
  }
}

function pageZero(){
  page = 1;
  margin = 0;
  pageNumber.innerHTML = "<h4>" + `${page}` + "</h4>";     
  slider.style.marginLeft = `${margin}px`;
    
}

function burgerFontOn(i) {
  document.querySelector(".burgerFont").style.visibility = "visible";
}

function burgerFontOff(i) {
  document.querySelector(".burgerFont").style.visibility = "hidden";
}

function myFunction(i) {
  var popup = document.getElementById(`myPopup${i}`);
  popup.classList.toggle("show");
  document.querySelector(".popup").style.visibility = "visible";
}

function myFunctionHide(i) {
  var popup = document.getElementById(`myPopup${i}`);
  popup.classList.toggle("show");
  document.querySelector(".popup").style.visibility = "hidden";
}

function slideToLeft() {
  
  navmenu.style.marginRight = `0px`;
}

function slideToRight() {
 
  navmenu.style.marginRight = `-320px`;
}

function todo() {
  for (let i = 0; i < 48; i++) {
    document
      .querySelector("#sliderPets")
      .insertAdjacentHTML("beforeend", addPetsCard(mydata[getRandomInt(mydata.length-1)], i));
  }
}

function addPetsCard(pet, i) {
  return `
  <div class="card">
  <div class="popup">
    <div class="popuptext" id="myPopup${i}" onclick="myFunctionHide(${i})">
      <div class="closePop"></div>
      <div class="popContent">
        <div class="popImage">          
          <div class="imgPop"><img src="${pet.img}" alt="${pet.name}" /></div>
        </div>
        <div class="popDescription">
          <div class="popDescriptionContent">
            <h3>${pet.name}</h3>
            <h4>${pet.type} - ${pet.breed}</h4>           
            <p>${pet.description}</p>
            <ul>
                <li><h5><b>Age: </b>${pet.age}</h5></li>
                <li><h5><b>Inoculations: </b>${pet.inoculations}</h5></li>
                <li><h5><b>Deseases: </b>${pet.diseases}</h5></li>
                <li><h5><b>Parasites: </b>${pet.parasites}</h5></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <img src="${pet.img}" alt="${pet.name}" />
  </div>
  <div id="cardbuttom">
    <div><p class="petCardTitle">${pet.name}</p></div>
    <div>
      <button class="petButton" onclick="myFunction(${i})">
        <p>Learn more</p>
      </button>
    </div>
  </div>
</div>            
    `;
}

function moveNext() {
  let counter = 0;
  let maxCounter;
  if (margin === 0 || !isEnable) {
  } else {
    if(desktop){
      maxCounter = 1240;
    }
    if(tablet){
      maxCounter = 620;      
    }
    if(smartphone){
      maxCounter = 310;
    }
    isEnable = false;

    let interval = setInterval(function () {
      if (counter === maxCounter) {
        margin += counter;
        clearInterval(interval);
        page--;
        pageNumber.innerHTML = "<h4>" + `${page}` + "</h4>";
        counter = 0;
        active();
        return;
      }
      counter += 10;
      slider.style.marginLeft = `${margin + counter}px`;
    }, 1);
    let srettimeout = setTimeout(() => {
      isEnable = true;
    }, 800);
  }
}

function movePrev() {
  let counter = 0;

  if (margin === minSliderPosition || !isEnable) {
  } else {

    if(desktop){
      maxCounter = 1240;
    }
    if(tablet){
      maxCounter = 620;      
    }
    if(smartphone){
      maxCounter = 310;
    }

    isEnable = false;

    let interval = setInterval(function () {
      if (counter === maxCounter) {
        margin -= counter;
        clearInterval(interval);
        page++;
        pageNumber.innerHTML = "<h4>" + `${page}` + "</h4>";
        counter = 0;
        active();
        return;
      }
      counter += 10;
      slider.style.marginLeft = `${margin - counter}px`;
    }, 1);
    let srettimeout = setTimeout(() => {
      isEnable = true;
    }, 800);
  }
}

function movePrevAll() {
  if(isEnable){
  margin = 0;
  page = 1;
  slider.style.marginLeft = `${margin}px`;
  pageNumber.innerHTML = "<h4>" + `${page}` + "</h4>";
  active();
  console.log(margin);
}
}

function moveNextAll() {
  if(isEnable){
  margin = minSliderPosition;
  if(desktop){
    page = 6;
  }
  if(tablet){
    page = 8;     
  }
  if(smartphone){
    page = 16;
  }
  
  slider.style.marginLeft = `${margin}px`;
  pageNumber.innerHTML = "<h4>" + `${page}` + "</h4>";
  active();
  console.log(margin);
  }
}

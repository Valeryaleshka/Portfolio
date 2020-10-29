
let btnNext = document.querySelector("#btn-next");
let btnNextAll = document.querySelector("#btn-next-all");
let pageNumber = document.querySelector("#page-number");
let btnPrev = document.querySelector("#btn-prev");
let btnPrevAll = document.querySelector("#btn-prev-all");
let slider = document.querySelector("#sliderPets");
let btnNext2 = document.querySelector("#btn-next2");
let btnPrev2 = document.querySelector("#btn-prev2");
let navmenu = document.querySelector("#headerPets > div.headerNavMenuBurger");

let mydata = [];
let mydata48 = [];

const request = new XMLHttpRequest();
request.open('GET',"./pets.json");

request.onload = () =>{
  mydata = JSON.parse(request.response);
  
  mydata48 = (() => {
    let temparr = [];

    for(let i = 0; i < 6; i++){
     const newPets = mydata;

     for(let j = mydata.length ; j > 0; j--){
       let randInd = Math.floor(Math.random() * j);
       const randElem = newPets.splice(randInd, 1)[0];
       newPets.push(randElem);
       
     }

     temparr = [...temparr, ...newPets];
     
    }

    return temparr;
  })();
  
  mydata48 = sort863(mydata48);
  todo(mydata48);
}

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;

  list = sort6recursively(list);

  return list;
}


const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
}

request.send();


let minSliderPosition;
document.querySelector("body > div.burgerFont").addEventListener("click", slideToRight,burgerFontOff);
document.querySelector("body > div.burgerFont").addEventListener("click", burgerFontOff);
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

active();

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
    document.querySelector(".burgerFont").style.visibility = "hidden";
    desktop = true;
    smartphone = false;
    tablet = false;
    checkWindow()
    pageZero();
    active();    
  }
  if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1280 && !tablet){
    document.querySelector(".burgerFont").style.visibility = "hidden";
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

function closeAll (){
  for(let i = 0; i<48;i++){
    let popup2 = document.getElementById(`myPopup${i}`);
  popup2.classList.toggle("show");
  document.querySelector(".popup").style.visibility = "hidden";
  }
}

function slideToLeft() {
  document.querySelector(".white").style.backgroundColor = "rgba(0, 0, 0, 0)";
  navmenu.style.marginRight = `0px`;
  
}

function slideToRight() {
  document.querySelector(".white").style.backgroundColor = "white";
  navmenu.style.marginRight = `-320px`;
}

function todo(pets) {
  for (let i = 0; i < 48; i++) {
    document
      .querySelector("#sliderPets")
      .insertAdjacentHTML("beforeend", addPetsCard(pets[i], i));
  }
}

function addPetsCard(pet, i) {
  return `
  <div class="card">
  <div class="popup">
    <div class="popuptext" id="myPopup${i}" onclick="myFunctionHide(${i})">
      <div class="closePop" ></div>
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
      counter += 31;
      slider.style.marginLeft = `${margin + counter}px`;
    }, 1);
    let srettimeout = setTimeout(() => {
      isEnable = true;
    }, 300);
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
      counter += 31;
      slider.style.marginLeft = `${margin - counter}px`;
    }, 1);
    let srettimeout = setTimeout(() => {
      isEnable = true;
    }, 300);
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

let btnNext = document.getElementById("btn-next");
let btnPrev = document.getElementById("btn-prev");
let btnNext2 = document.getElementById("btn-next2");
let btnPrev2 = document.getElementById("btn-prev2");
let navmenu = document.querySelector(".headerNavMenuBurger");
let isEnabled = true;
let mydata = [
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
let desktop = false;
let tablet = false;
let smartphone = false; 
todo();
let items = document.querySelectorAll('.slider');
let currentItem = 0;

window.addEventListener('resize', resizeFunction);

document.querySelector("body > div.burgerFont").addEventListener("click", slideToRight,burgerFontOff);
document.querySelector("body > div.burgerFont").addEventListener("click", burgerFontOff);
document
  .querySelector("body > div.mainPage > div.notOnly > div.header > div.burger")
  .addEventListener("click", slideToLeft);

document
  .querySelector(
    "body > div.mainPage > div.notOnly > div.header > div.headerNavMenuBurger > div.header > div.burger"
  )
  .addEventListener("click", slideToRight)


document
  .querySelector("body > div.mainPage > div.notOnly > div.header > div.burger")
  .addEventListener("click", burgerFontOn);
document
  .querySelector(
    "body > div.mainPage > div.notOnly > div.header > div.headerNavMenuBurger > div.header > div.burger"
  )
  .addEventListener("click", burgerFontOff);

  function slideToLeft() {
  
    navmenu.style.marginRight = `0px`;
  }
  
  function slideToRight() {
   
    navmenu.style.marginRight = `-320px`;
  }
  
function addPetsCard(pet, pet2, pet3, i) {
  return `
  <div class="slider">
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
                <li>
                  <h5><b>Age: </b>${pet.age}</h5>
                </li>
                <li>
                  <h5><b>Inoculations: </b>${pet.inoculations}</h5>
                </li>
                <li>
                  <h5><b>Deseases: </b>${pet.diseases}</h5>
                </li>
                <li>
                  <h5><b>Parasites: </b>${pet.parasites}</h5>
                </li>
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


  <div class="card">
    <div class="popup">
      <div class="popuptext" id="myPopup${i+100}" onclick="myFunctionHide(${i+100})">
        <div class="closePop"></div>
        <div class="popContent">
          <div class="popImage">
            <div class="imgPop"><img src="${pet2.img}" alt="${pet2.name}" /></div>
          </div>
          <div class="popDescription">
            <div class="popDescriptionContent">
              <h3>${pet2.name}</h3>
              <h4>${pet2.type} - ${pet2.breed}</h4>
              <p>${pet2.description}</p>
              <ul>
                <li>
                  <h5><b>Age: </b>${pet2.age}</h5>
                </li>
                <li>
                  <h5><b>Inoculations: </b>${pet2.inoculations}</h5>
                </li>
                <li>
                  <h5><b>Deseases: </b>${pet2.diseases}</h5>
                </li>
                <li>
                  <h5><b>Parasites: </b>${pet2.parasites}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img src="${pet2.img}" alt="${pet2.name}" />
    </div>
    <div id="cardbuttom">
      <div><p class="petCardTitle">${pet2.name}</p></div>
      <div>
        <button class="petButton" onclick="myFunction(${i+100})">
          <p>Learn more</p>
        </button>
      </div>
    </div>
  </div>


  <div class="card">
    <div class="popup">
      <div class="popuptext" id="myPopup${i+200}" onclick="myFunctionHide(${i+200})">
        <div class="closePop"></div>
        <div class="popContent">
          <div class="popImage">
            <div class="imgPop"><img src="${pet3.img}" alt="${pet3.name}" /></div>
          </div>
          <div class="popDescription">
            <div class="popDescriptionContent">
              <h3>${pet3.name}</h3>
              <h4>${pet3.type} - ${pet3.breed}</h4>
              <p>${pet3.description}</p>
              <ul>
                <li>
                  <h5><b>Age: </b>${pet3.age}</h5>
                </li>
                <li>
                  <h5><b>Inoculations: </b>${pet3.inoculations}</h5>
                </li>
                <li>
                  <h5><b>Deseases: </b>${pet3.diseases}</h5>
                </li>
                <li>
                  <h5><b>Parasites: </b>${pet3.parasites}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img src="${pet3.img}" alt="${pet3.name}" />
    </div>
    <div id="cardbuttom">
      <div><p class="petCardTitle">${pet3.name}</p></div>
      <div>
        <button class="petButton" onclick="myFunction(${i+200})">
          <p>Learn more</p>
        </button>
      </div>
    </div>
  </div>


 
</div>`;
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

function burgerFontOn(i) {
  document.querySelector(".burgerFont").style.visibility = "visible";
}

function burgerFontOff(i) {
  document.querySelector(".burgerFont").style.visibility = "hidden";
}

function resizeFunction(){
  if(document.documentElement.clientWidth > 1279 && !desktop){  
    desktop = true;
    smartphone = false;
    tablet = false;
    console.log("pc")
    items.forEach(function(item){
      console.log("0")
      for(i = 0; i < 3; i++)
      item.children[i].classList.remove('hidden')})
       
  }
  if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1280 && !tablet){
    desktop = false;
    smartphone = false;
    tablet = true;
    console.log("tablet")
    items.forEach(function(item){
      console.log("1")
      item.children[1].classList.remove('hidden');
      item.children[2].classList.add('hidden')});
       
  }
  if(document.documentElement.clientWidth < 768 && !smartphone){
    desktop = false;
    smartphone = true;
    tablet = false;
    console.log("smart")
    items.forEach(function(item){
      console.log("2")
      item.children[2].classList.add('hidden');
      item.children[1].classList.add('hidden')})
    
  }
}

/*////////////////////////////////////////*/
function todo() {
  for (let i = 0; i < mydata.length; i++) {
    let random = getRandomInt(mydata.length - 1);
    if(i < 1){
    document
      .querySelector("#cardHolder")
      .insertAdjacentHTML(
        "beforeend",
        addPetsCard(mydata[(i+random)% mydata.length],mydata[(i+2+random)% mydata.length],mydata[(i+4+random) % mydata.length], i)
      );
      document.querySelector('.slider').classList.add('active');
      }else{
        document
      .querySelector("#cardHolder")
      .insertAdjacentHTML(
        "beforeend",
        addPetsCard(mydata[(i+random)% mydata.length],mydata[(i+2+random)% mydata.length],mydata[(i+4+random) % mydata.length], i)
      );
      }
  console.log('hello')
}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


resizeFunction();

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].classList.remove('active', direction);
  /*items[currentItem].addEventListener('animationend', function(){
     this.classList.remove('active', direction);
  });*/
}

function showItem(direction) {    
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function(){
     this.classList.remove('next', direction);
     this.classList.add('active');
     isEnabled = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem( n - 1 );
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem( n + 1 );
  showItem('from-right');
}

document.querySelector('#btn-prev').addEventListener('click', function() {
 if(isEnabled){
     previousItem(currentItem)
 }
})

document.querySelector('#btn-next').addEventListener('click', function() {
  if(isEnabled){
      nextItem(currentItem)
  }  
})

document.querySelector('#btn-prev2').addEventListener('click', function() {
  if(isEnabled){
      previousItem(currentItem)
  }
 })
 
 document.querySelector('#btn-next2').addEventListener('click', function() {
   if(isEnabled){
       nextItem(currentItem)
   }  
 })

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBtn = document.getElementById('decimal');
const result = document.getElementById('result');
const display = document.getElementById('display');
const sqrt = document.getElementById('sqrt')
const minus = document.getElementById('minus')
const system = document.getElementById('system')
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';
let sqrtPressed = false;

for (var i = 0; i < numbers.length; i++) {  
  var number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
}

decimalBtn.addEventListener('click', decimal);

sqrt.addEventListener('click', doSqrt);

minus.addEventListener('click', doMinus);

system.addEventListener('click', function(){console.log(display.value)});

function numberPress(number) {
  isSqrt();
  isNaN();
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operationPress(op) {
  isNaN();
  let localOperationMemory = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {    
    display.value = MemoryCurrentNumber;    
  } else {    
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += +localOperationMemory;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= +localOperationMemory;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= +localOperationMemory;
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= +localOperationMemory;
    } else if (MemoryPendingOperation === '^') {
      MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, (+localOperationMemory));
    } else {
      MemoryCurrentNumber = +localOperationMemory;
    } 
    display.value = strip(MemoryCurrentNumber);
    MemoryPendingOperation = op;
  }
  
}

function strip(number) {
  return (parseFloat(number.toPrecision(12)));
}

function decimal(argument) {
  isNaN();
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}

function doSqrt (op){
  if(+display.value<0){
    display.value = "Ошибка"
  }else{
  MemoryCurrentNumber = display.value;
  MemoryCurrentNumber = Math.sqrt(+MemoryCurrentNumber);  
  display.value = MemoryCurrentNumber;
  MemoryPendingOperation = op;
  sqrtPressed = true;
  }
}


function doMinus (op){
  display.value = (+display.value)*(-1);
}

function isNaN(op){
 if (display.value==="Ошибка") {
   display.value = 0;
   
 }
}

function isSqrt(){
  if(sqrtPressed){
    display.value = 0;
    sqrtPressed = false;
  }
}

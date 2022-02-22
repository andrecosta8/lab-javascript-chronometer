const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  setInterval(() =>{
    printMinutes();
    printSeconds();
},1000)
 
}

function printMinutes() {
  // ... your code goes here
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

  
}

function printSplit() {
  // ... your code goes here
  const newSplit = document.createElement("li")
  newSplit.innerText = chronometer.split();
  splitsElement.appendChild(newSplit);
  
}

function clearSplits() {
  // ... your code goes here
  chronometer.reset();
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.split(printSplit());
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
  
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime());
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset(clearSplits());
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText == 'START'){
      setStartBtn();
      
  } else if (btnLeftElement.innerText == 'STOP') {
      setStopBtn();
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.innerText == 'RESET'){
    setResetBtn();
    
  
} else if (btnRightElement.innerText == 'SPLIT'){
  setSplitBtn();
}
});

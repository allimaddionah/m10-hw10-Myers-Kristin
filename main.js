// It is always helpful to use comments in your code!
//Print 212 inside of span with ID boiling-temp
/*const boilingTemp = document.getElementById('boiling-temp');
//console.log(boilingTemp);
const printBoiling = () => {
  document.createTextNode('212');
};
console.log(printBoiling);*/

// var message1 = document.createTextNode('212');
// //console.log(message1);
// //console.log(boilingTemp);
// var boilingTemp = document.getElementById('boiling-temp');
// message1.appendChild(boilingTemp);

//Code along

const boilingTemp = document.getElementById('boiling-temp');
const freezingTemp = document.getElementById('freezing-temp');
const waterTemp = document.getElementById('water-temp');

const boilingMessage = document.getElementById('boiling');
const freezingMessage = document.getElementById('frozen');
const goodTempMessage = document.getElementById('good-temp');

const frozenNumber = 32;
const boilingNumber = 212;
const waterTempNumber = 72;

const showBoilingTemp = () => {
  freezingTemp.innerHTML = frozenNumber;
}
showBoilingTemp();

const showFreezingTemp = () => {
  boilingTemp.innerHTML = boilingNumber;
}
showFreezingTemp();

const showWatergTemp = () => {
  waterTemp.innerHTML = waterTempNumber;
}
showWatergTemp();

const showIfWaterIsFine = () => {
  if(waterTempNumber > boilingNumber) {
    boilingMessage.classList.remove('hide');
  }
  else if (waterTempNumber < frozenNumber) {
    freezingMessage.classList.remove('hide');
  }
  else {
    goodTempMessage.classList.remove('hide');
  }
}
setTimeout(showIfWaterIsFine, 3000);

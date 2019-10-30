// It is always helpful to use comments in your code!
//Print 212 inside of span with ID boiling-temp
/*const boilingTemp = document.getElementById('boiling-temp');
//console.log(boilingTemp);
const printBoiling = () => {
  document.createTextNode('212');
};
console.log(printBoiling);*/

var message1 = document.createTextNode('212');
//console.log(message1);
//console.log(boilingTemp);
var boilingTemp = document.getElementById('boiling-temp');
message1.appendChild(boilingTemp);

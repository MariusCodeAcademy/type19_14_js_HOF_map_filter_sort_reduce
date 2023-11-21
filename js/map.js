'use strict';
console.log('map.js file was loaded');

const colors = ['red', 'green', 'blue', 'black', 'white'];

for (let spalva of colors) {
  console.log('spalva ===', spalva);
}
console.log('==============');
const spalvosUpper = [];
const grazinaForEach = colors.forEach((spalva) => {
  console.log('spalva ===', spalva);
  spalvosUpper.push(spalva.toUpperCase());
});
console.log('MAP ==============');

const grazinaMap = colors.map((spalva) => {
  console.log('spalva ===', spalva);
  return spalva.toUpperCase();
});
console.log('grazinaForEach ===', grazinaForEach);
console.log('grazinaMap ===', grazinaMap);
console.log('spalvosUpper ===', spalvosUpper);

// parasyti map funckija kuri naujame masyve isaugotu colors stringu ilgius
const colLengthsArr = colors.map((spalva) => spalva.length);

console.log('colLengthsArr ===', colLengthsArr);
// gauti masyva kuriame butu li elementai su colors masyvo tekstu.

const liColorsElsArr = colors.map((spalva) => {
  // sukurti li el
  const liEl = document.createElement('li');
  // ideti i ji texta
  liEl.textContent = spalva;
  // ji grazinti
  return liEl;
});
console.log('liColorsElsArr ===', liColorsElsArr);
const listEl = document.getElementById('list');

listEl.append(...liColorsElsArr);
liColorsElsArr.forEach((liEl) => {
  listEl.append(liEl);
});

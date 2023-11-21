'use strict';
console.log('sort.js file was loaded');

const numsArr = [100, -5, 0, -4, 10, -3, 15, 1];
const strArr = ['bb', 'dd', 'cc', 'aa'];
const objArr = [
  { years: 5, department: 'bb' },
  { years: 1, department: 'dd' },
  { years: 15, department: 'cc' },
  { years: 8, department: 'aa' },
];

// isrikiuoti pagal metus
console.table(objArr);
objArr.sort((aObj, bObj) => aObj.years - bObj.years);
console.table(objArr);

// isrikiuoti pagal departameta
objArr.sort((aObj, bObj) => aObj.department.localeCompare(bObj.department));
console.table(objArr);

//
// sort() - paprastom tekstinem reiksmem veikia kaip ir turetu buti
// reverse() - i priesinga puse
// console.log('strArr ===', strArr);
// let rez = strArr.sort();
// strArr.reverse();
// console.log('strArr po ===', strArr);
// console.log('rez ===', rez);

// numsArr.sort((a, b) => a - b);
// skaitnis sort yra daroma su funkcija kuri grazina teigiama, neigiama arba 0
// console.log('numsArr ===', numsArr);
// numsArr.sort();
// // numsArr.sort((a, b) => a - b);
// numsArr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log('numsArr po ===', numsArr);

'use strict';
console.log('filter-find.js file was loaded');

// 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20
const numsArr = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log('numsArr ===', numsArr);

// array.filter(function(currentValue, index, arr))
// filter - jei vidine fn grazina true arba truethy value tai reikme atrenkama
// jei ne praleidziama

let filtered = numsArr.filter((num) => {
  if (num > 0) {
    return true;
  }
});
filtered = numsArr.filter((num) => num < 0);
console.log('filtered ===', filtered);

const mixed = ['red', true, 5, 7, 'white', 10, 15, null];
console.log('mixed ===', mixed);
// atrinkti stringus
const strArr = mixed.filter((el) => typeof el === 'string');
console.log('strArr ===', strArr);

// atrinkti tik skaicius i atskira masyva
const skArr = mixed.filter((el) => typeof el === 'number');
const daugUz8Arr = skArr.filter((sk) => sk > 8);
console.log('daugUz8Arr ===', daugUz8Arr);
console.log('skArr ===', skArr);

// atrinkti ne stringus ir neskaicius i viena masyva
const neSkNeStrArr = mixed.filter(
  (el) => typeof el !== 'string' && typeof el !== 'number'
);
console.log('neSkNeStrArr ===', neSkNeStrArr);

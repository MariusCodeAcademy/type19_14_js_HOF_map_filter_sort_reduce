'use strict';
console.log('includes-every-some.js file was loaded');

const numsArr = [1, -5, 0, -4, 10, -3, 15];

// ar -4 yra masyve
let yraNeg4 = numsArr.includes(-4);
console.log('yraNeg4 ===', yraNeg4);

//// ar -4 yra masyve su some

// some
yraNeg4 = numsArr.some((sk) => sk === -4);
console.log('yraNeg4 ===', yraNeg4);
// ar yra reiksmiu mazesniu uz -50
const minus50 = numsArr.some((sk) => sk < -50);
console.log('minus50 ===', minus50);

// every
// ar visos reiksmes yra teigiamos?
let allPositives = numsArr.every((sk) => sk > 0);
console.log('allPositives ===', allPositives);

// ar visos reiksmes daugiau uz -50
const moreThanMinus50 = numsArr.every((sk) => sk > -50);
console.log('moreThanMinus50 ===', moreThanMinus50);

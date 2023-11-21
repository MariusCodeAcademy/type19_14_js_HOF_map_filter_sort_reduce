'use strict';
console.log('reduce.js file was loaded');

const nums = [1, 2, 3, 4];

// gauti masyvo suma
let total = 0;
nums.forEach((sk, idx) => {
  total = total + sk;
  // console.log(`ciklas ${idx + 1} tarpine reikme = ${total}`);
});

// array.forEach((currentValue, currentIndex, arr) => {}, thisValue)
// array.reduce((accumulator, currentValue, currentIndex, arr) => {}, initialValue)
// debugger;
let totalSum = nums.reduce((accumulator, sk, idx) => {
  // console.log('sk ===', sk);
  // console.log('accumulator ===', accumulator);
  let sum = sk + accumulator;
  console.log(`Ciklas: ${idx} >>> sk ${sk} + acc ${accumulator} = ${sum}`);
  // kas grys is sios funkcijos sio ciklo metu bus issaugota i kito ciklo akumuliatoriu
  return sum;
}, 0);
// totalSum = nums.reduce((accumulator, sk) => sk + accumulator, 0);
console.log('totalSum ===', totalSum);

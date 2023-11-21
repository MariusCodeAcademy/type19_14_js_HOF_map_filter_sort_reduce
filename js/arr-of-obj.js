'use strict';
console.log('arr-of-obj.js file was loaded');

const mainArr = [
  {
    name: 'Mickey Mouse',
    age: 92,
    gender: 'Male',
    town: 'Disneyville',
  },
  {
    name: 'SpongeBob SquarePants',
    age: 33,
    gender: 'Male',
    town: 'Bikini Bottom',
  },
  {
    name: 'Dora the Explorer',
    age: 14,
    gender: 'Female',
    town: 'Playa Verde',
  },
  {
    name: 'Bugs Bunny',
    age: 83,
    gender: 'Male',
    town: 'Looneyville',
  },
  {
    name: 'Lisa Simpson',
    age: 9,
    gender: 'Female',
    town: 'Springfield',
  },
];
console.table(mainArr);

console.log('mainArr[0].town ===', mainArr[0].town);

let found = mainArr.find((cartObj) => cartObj.name === 'Bugs Bunny');
// found = mainArr.find((cartObj) => cartObj.age > 33);
console.log('found ===', found);

// isrikuoti mainArr pagal amziu

// isrikuoti mainArr pagal varda

// atrinkti tik vyrus arba moteris

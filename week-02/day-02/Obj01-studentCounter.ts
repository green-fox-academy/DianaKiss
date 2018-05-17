'use strict';

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

console.log(students[1]);

//console.log(students.name);


function candyFun(nameOfArray) {
  let candyArray: object[] = [];
  students.forEach(OneStud => {
      candyArray.push({
      name: OneStud.name,
      candies: OneStud.candies,
    });
  });
  console.log(candyArray);
  
 }

 candyFun(students);






/*
let candiesArr: any[] = [];
candiesArr.push(students);

candiesArr.forEach(students => {
  console.log(`${students.name} - ${students.candies}`);
});
*/

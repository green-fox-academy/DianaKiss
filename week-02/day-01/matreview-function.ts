function sayHello() {
  console.log('Hello World');
} 

function greet(greetStr: string, nameStr:string = 'GFA'): void { //this function does not have a return value so it is void
  console.log(`${greetStr} ${nameStr}`); 
} 

function greetOptionl(greetStr: string, nameStr:string = 'GFA', opt?: boolean): void { //this function does not have a return value so it is void
  if (opt === true) {
    console.log('I have an optional argument')
  }
  console.log(`${greetStr} ${nameStr}`); 
} 



function multiply(a: number, b: number): number { //it has a return value
  let result = a * b;
  return result;
}

sayHello();
greet('hello');
greetOptionl('hello', 'Dia', true);
/* if i write here only 1 variable, js will figure out 
and use the fallback variable from the funtion */

console.log(multiply(2, 5))

const sum = function(a: number, b: number): number {
  return a + b;  
}


console.log(typeof parseInt('2'));
console.log(typeof parseFloat('2.3'));

console.log('pets part comes here');


let pets:string [] = ['Morzsi', 'dottyi', 'chubes','dottyi'];
console.log(pets[0]);

pets.push('Mancs');
console.log(pets);
console.log(pets.length);
console.log(pets[pets.length - 1]);
// pets[pets.length + 1] = 'Vau'; its not the best way to add a new element to the arry. use "push" instead
console.log(pets);
console.log(pets[4]);
pets.unshift('Vau');
console.log(pets);

const value = pets.shift();
console.log(pets);
console.log(value);

const lastValue = pets.pop();
console.log(pets);
console.log(lastValue);


console.log(pets.indexOf('dottyi'));

const newPets = pets.slice(1, 3);

console.log(newPets);

console.log('this is the splice part');
pets.splice(1, 2, 'Cezar');
console.log(pets);

console.log('this is the concat part');

//console.log(pets.concat(['Dog1', 'Dog2', 'Dog3']); / this is not working why?


// const array2 = pets.concat([]); this is just a reminder to remember it later on when we will use it


console.log('// forEach //built-in function');

for (let i: number = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

pets.forEach(function(dog, index) {
  console.log(`#${index +1}: ${dog}`);
});

pets.forEach((dog, index) => {
  console.log(`#${index +1}: ${dog}`);
});


pets.forEach(function(dog, index) {
  console.log(`#${index +1}: ${dog}`);
});




console.log('map built -in function');

/*
let helloDogs = pets.map((dog, index) => {
  return `Hello, ${dog}`;
});
*/

// ez ugyanaz, csak rovidebb:
let helloDogs = pets.map((dog, index) => ( `Hello, ${dog}`));


console.log(helloDogs);





console.log('filter comes here!!!!!! ');

const longNames = pets.filter(function(dog) {
  return dog.length > 5;
});


console.log(longNames);



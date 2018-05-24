import {Thing} from "./thing";
import {Fleet} from "./fleet";

let toDoList = new Fleet();
let toDo1: Thing = new Thing('Get milk');
let toDo2: Thing = new Thing('Rm');
let toDo3: Thing = new Thing('Stand Up!');
let toDo4: Thing = new Thing('Eat');



function print(){
  toDoList.add(toDo1);
  toDoList.add(toDo2);
  toDoList.add(toDo3);
  toDoList.add(toDo4);
  toDo3.complete();
  toDo4.complete();
  //--------------
  let workingList: any[] = toDoList.getThings();
  let checkStatus: string = '';


}

print();

console.log(toDoList);


//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */
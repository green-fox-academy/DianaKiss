'use strict';
export {};

/*
Create Student and Teacher classes
Student
    learn()
    question(teacher) -> calls the teachers answer method
Teacher
    teach(student) -> calls the students learn method
    answer()
*/

class Student {
  learn() {
    return ('Anegyzet plusz benegyzet egyenlo...');
  }

  question(teacher) {
    let annusNeni = new Teacher;
    //teacher = annusNeni.answer();
  }
}

class Teacher {
  teach(student) {
    let pistike = new Student;
    student = pistike.learn();

    /*answer() {
      return ('hulye vagy fiam');
    }*/
  }

}

console.log(Student);
console.log(Teacher);

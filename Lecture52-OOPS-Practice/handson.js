/* inheritance */
class Vehicle {
  start() {
    console.log("vehivle is starting");
  }
}

class Car extends Vehicle {
  start() {
    console.log("car is starting");
  }
}

class ElectricCar extends Vehicle {
  start() {
    console.log("electric car is starting");
  }
}

/* polymorphism: many form
-> types: single,heirarchical,hybrid
overriding: parent class me method hogi usko child class me overwrite krna
 */

class Employee {
  constructor(yoE) {
    this.yoE = yoE;
  }
  salary() {
    return 50000 * this.yoE;
  }
}

class SalesEmployee extends Employee {
  constructor(yoE) {
    super(yoE);
  }
  salary() {
    return 100000 * this.yoE;
  }
}

class Manager extends Employee {
  constructor(yoE) {
    super(yoE);
  }
  salary() {
    return 500000 * this.yoE;
  }
}

const sales1 = new SalesEmployee(2);
console.log(sales1.salary());

const mang1 = new Manager(4);
console.log(mang1.salary());

/* abstraction:(functionality not showing only show usefull data to user) */
class Student {
  constructor(marks) {
    this._marks = marks;
  }
  #calculateMarks() {
    const totalSubjects = Object.keys(this._marks).length;
    let totalMarks = 0;
    for (let marks in this._marks) {
      totalMarks += this._marks[marks];
    }
    return totalMarks / totalSubjects;
  }
  get marks() {
    //getter to access private func
    return this.#calculateMarks();
  }
}

const marks = {
  maths: 90,
  science: 80,
  english: 100,
};

const rahul = new Student(marks);
console.log(rahul.marks); //bcoz of getter () not required

/* composition:  has a realtionship
2 classes join krke ek banate hai */

class PersonalDetails {
  constructor({ name, age, dob }) {
    this.name = name;
    this.age = age;
    this.dob = dob;
  }

  print() {
    console.log("Personal Details: ", this.name, this.age, this.dob);
  }
}

class EducationDetails {
  constructor({ college, gradyear, cgpa }) {
    this.college = college;
    this.gradyear = gradyear;
    this.cgpa = cgpa;
  }

  print(){
    console.log("Education details: ",this.college,this.gradyear,this.cgpa);
    
  }
}

const personalDetails = {
  name: "Rahul",
  age: 25,
  dob: "12dec2001",
};
const educationDetails = {
  college: "jspm",
  gradyear: 2024,
  cgpa: 8.2,
};

class Person{
    constructor(aadharNumber,personalDetails,educationDetails){
        this.aadharNumber=aadharNumber;
        this.personalDetails = new PersonalDetails(personalDetails);
        this.educationDetails = new EducationDetails(educationDetails);
    }
}

const p1 = new Person(12112,personalDetails,educationDetails);
console.log("aadharnumber:",p1.aadharNumber)
p1.educationDetails.print();
p1.personalDetails.print();


/* exmaples of oops:
abstraction : hiding the implementation 
encapsulation : sensitive data protected, getters and setters
inheritance : inherit property from parent
polymorphism : differnt classes can implement method of same name but differnt purpose
composition : 2 classes ko join krke ek class me use krna (has a relation)


example of abstraction (not showing mechanism,)
 1.elevator : press floor 2 and elevator stops at 2nd floor  we dont know mechanism
 2.google search

 example of encapsulation (protecting sensitive data ,get and set)
 1.whatsapp 2 step verification 
 2.

 example of inheritance (parent child relationship)
 1.powerplant -> coal,hydro,solar
 2.payment methods -> card,upi,cash

 example of polymorphism: (same method differnt behaviour)
 1.eletricty can be generated using ->coal,water,solar,wind

 example of composition(has a realtion)
 1.district has taluka, district has villages


 singleton  class: it is a class which has  only one instance in the entire program
 */

 
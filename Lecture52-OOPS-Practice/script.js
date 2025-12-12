/* example of oops, singleton classes*/
class Vehicle {
  start() {
    console.log("vehicle is starting");
  }
}
class Car extends Vehicle {
  start() {
    console.log("Car is starting");
  }
}

class ElectricCar extends Car {
  start() {
    console.log("ElectricCar is starting");
  }
}

/*
Polymorphism
types: single,heirarchical, hybrid
overriding: (only  in polymorphism)
  parent ka koi function child class me use krna hai lekin implementation can be differnt;
*/

/* overiding example 1 */
class Employee {
  constructor(yoE) {
    this.yoE = yoE;
  }
  salary() {
    return 500000 * this.yoE;
  }
}

class SalesEmployee extends Employee {
  constructor(yoE) {
    super(yoE);
  }

  salary() {
    return this.yoE * 300000;
  }
}
class Manager extends Employee {
  constructor(yoE) {
    super(yoE);
  }
  salary() {
    return this.yoE * 1000000;
  }
}

const salesEmp1 = new SalesEmployee(4);
console.log("salesEmployee salary:", salesEmp1.salary());

const mang1 = new Manager(2);
console.log("Manager salary", mang1.salary());

/* overiding example 2 */
class Intrest {
  constructor(principal, rate, time, nOfY) {
    this.principal = principal;
    this.rate = rate;
    this.time = time;
    this.nOfY = nOfY;
  }

  interest() {
    return this.principal + this.rate * this.time;
  }
}

class simpleInterest extends Intrest {
  constructor(principal, rate, time) {
    super(principal, rate, time);
  }
  interest() {
    return (this.principal * this.rate * this.time) / 100;
  }
}

class CompoundInterest extends Intrest {
  constructor(principal, rate, time, nOfY) {
    super(principal, rate, time, nOfY);
  }

  interest() {
    return (
      this.principal *
      Math.pow(1 + this.rate / this.nOfY, this.nOfY * this.time)
    );
  }
}

const si = new simpleInterest(100, 2, 2);
console.log("simple interest:", si.interest());

const ci = new CompoundInterest(100, 2, 2, 4);
console.log("compound interes:", ci.interest());

/* encapsulation(private/sensitive) lecture 43 bank example */
/* abstraction */

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
    return this.#calculateMarks();
  }
}

const marks = {
  math: 90,
  science: 80,
  english: 100,
};

const rahul = new Student(marks);
console.log(rahul.marks);

/* composition: 2 classes ko join krke ek banate hai */
class PersonalDetails {
  constructor({ name, age, dob }) {
    this.name = name;
    this.age = age;
    this.dob = dob;
  }

  print() {
    console.log("Personal Details: ",this.name, this.age, this.dob);
  }
}

class EducationDetails {
  constructor({ college, gradYear, cgpa }) {
    this.college = college;
    this.gradYear = gradYear;
    this.cgpa = cgpa;
  }

  print() {
    console.log("Education Details: ",this.college, this.gradYear, this.cgpa);
  }
}

const personalDetails={
  name:"prajwal",
  age:23,
  dob:"12dec2001"
}
const educationDetails ={
    college:"AIT",
    gradYear:2024,
    cgpa:8.3,
} 

class Person {
    constructor(aadharNumber,personalDetails,educationDetails){
        this.aadharNumber= aadharNumber
        this.personalDetails = new PersonalDetails(personalDetails);
        this.educationDetails = new EducationDetails(educationDetails);
    }
}

const prajwal = new Person(12212,personalDetails,educationDetails);
console.log("aadhar number: ",prajwal.aadharNumber);
prajwal.personalDetails.print();
prajwal.educationDetails.print();


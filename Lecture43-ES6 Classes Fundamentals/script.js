/* //yesterday revision
function Car(name, model, speed, isRunning, changedSpeed) {
  this.name = name;
  this.model = model;
  this.speed = speed;
}
Car.prototype.isRunning = function () {
  this.speed !== 0
    ? console.log("Car is running")
    : console.log("car is not running");
};

Car.prototype.changedSpeed = function (newSpeed) {
  this.speed = newSpeed;
  console.log("speed changed");
};

const car1 = new Car("audi", 2020, 0);
car1.isRunning();
car1.changedSpeed(320);
car1.isRunning();

Car.prototype.printCarDetails = function () {
  console.log(
    `${this.name} is the car, model is ${this.model} and top speed is ${this.speed}.`
  );
};

car1.printCarDetails();
 */

/////////class

/*---------------- why we need class??
 -> in constructor we have to write the methods using constructorname.prototype.method ...
 -> and grouping was not there if we use class 
 -> so we created class inside we have both methods and properties ( constructor &   prototype methods  )
 -> class are not hoisted so we have to write first class and then we can use methods

 --------this keyword in classes
 -> here this keyword refers to the instance of the class 
*/
class Car {
  constructor(name, model, speed) {
    this.name = name;
    this.model = model;
    this.speed = speed;
  }

  isRunning() {
    this.speed !== 0
      ? console.log("Car is running")
      : console.log("car is not running");
  }
  changedSpeed(newSpeed) {
    this.speed = newSpeed;
    console.log("speed changed");
  }
}
const car1 = new Car("Creta", "AS-213", 100); //instance of class Car
// car1.isRunning();

class classAttendance {
  constructor(name, inClass) {
    this.name = name;
    this.inClass = inClass;
    this.presentDays = 0;
    this.absentDays = 0;
  }

  present() {
    this.presentDays++;
  }
  absent() {
    this.absentDays++;
  }
  calcPercentage() {
    let total = this.absentDays + this.presentDays;
    console.log(((this.presentDays / total) * 100).toFixed(2));
  }
}

const student1 = new classAttendance("rahul", 9);
student1.present();
student1.present();
console.log(student1);
student1.absent();
student1.absent();

console.log(student1);
console.log("Total Present Days:", student1.presentDays);
console.log("Total Absent Days:", student1.absentDays);
student1.calcPercentage();

//getters and setters in class
/*  why required??
 ->getter has readonly proptery we cannot set anything there
 ->setter has only set property we cannot return/log anything
 ->the main reason for using them is encapsulation (which properties to show/hide)
 meaning we can have some properties which user can change and some properties just only to read
 ->geters only read and setters can read/write but not return 

*/
class Student {
  constructor({ id, name, dob, grade }) {
    /* below are data properties */
    this.id = id;
    this.name = name;
    this._dob = dob;
    this.grade = grade;
    this._marks = 0;
  }

  get dob() {
    //readonly-> it calls iteself recursively and it can go in infinite recursion so we use _property name here it is _dob
    /* below is accesor properties */
    return this._dob;
  }

  set marks(newMarks) {
    //it takes only one parameter
    /* below is accesor properties */
    this._marks = newMarks;
  }

  get marks() {
    /* below is accesor properties */
    return this._marks;
  }
}

const mukesh = new Student({
  id: "ST-123",
  name: "Mukesh",
  dob: "24-12-2002",
  grade: 10,
});

mukesh.marks = 120;
console.log({ mukesh });

//static methods/property ->

/* what?
static jo hai vo sirf class ke hote hai :: they are not connected to objects 
so we cannot access using an instance as it doesnot belong to objects
why?
 without creating instance/object we want to  acces  some common property which we want to use 
how?
shown below
*/

class User2 {
  constructor(username, role) {
    this.username = username;
    this.role = role;
  }

  static guest() {
    return new User2("guest", "guest");
  }
}

const guestUser = User2.guest(); //here without creating an instance/object we are accessing guest method
console.log(guestUser);

//private properties -> sensitive info
/* 
 -> if we use # then it is private property
 -> it can be only accesible inside class
 -> methods can also be private
*/

class Bank {
  #pin = 1234; //# used so pin is now Private data
  constructor(firstPin) {
    this.#pin = firstPin;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(money, userPin) {
    if (money > 0 && money <= this.balance) {
      return userPin === this.#pin ? (this.balance -= money) : "Pin is wrong";
    } else {
      console.log("enter amount should be more than 0");
    }
  }
  checkBalance(userPin) {
    return userPin === this.#pin ? this.balance : "wrong pin";
  }
}

const sbi = new Bank(9870);
sbi.deposit(100);
console.log(sbi.checkBalance(9870));
sbi.withdraw(50, 9870);
console.log(sbi.checkBalance(9870));

console.log(sbi["#pin"]); //unable to access the value of PIN -> prints undefined
console.log(sbi.pin); //unable to access the value of PIN -> prints undefined

/* destructuring ->
 2things -> pass krte time obect chahiye
         -> destructure krte time object chahiye
         to hi vo error nh dega vrna cannot read undefined at destructuring aisa bolta hai
         
 */

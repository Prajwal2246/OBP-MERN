/* //yesterday revision - prototype and constructor and instance
function Car(name,model){
    this.name=name;
    this.model=model;
}

Car.prototype.isRunning=function(){
    this.speed>0? console.log("car is running") : console.log("car is not running");
}

Car.prototype.changedSpeed=function(newSpeed){
    this.speed=newSpeed;
    console.log("spped changed");
}

const car1=new Car("audi","AD-09");
car1.isRunning();
car1.changedSpeed(123);
console.log(car1);
 */

/*  Class

Why do we need them??
-> using constructors we have properties and multiple methods but they are not grouped
-> using class we can group them
-> class are not hoisted (write first then access)

this keyword
-> this keyword in class refers to the instance of the class
*/

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
    this.speed = 0;
  }

  isRunning() {
    this.speed > 0
      ? console.log("car is running")
      : console.log("car is not running");
  }

  changeSpeed(newSpeed) {
    this.speed = newSpeed;
    console.log("speed changed");
  }
}

const car1 = new Car("Creta", "CR-098"); //instance of class car
car1.isRunning();
car1.changeSpeed(120);
car1.isRunning();
console.log(car1);

//now task make a attendance class and implement present asbent and %
class classAttendance {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.absentDays = 0;
    this.presentDays = 0;
    this.totalDays = 0;
  }

  present() {
    this.presentDays++;
    this.totalDays++;
  }

  absent() {
    this.absentDays++;
    this.totalDays++;
  }

  calcPercentage() {
    return ((this.presentDays / this.totalDays) * 100).toFixed(2);
  }
}

const rahul = new classAttendance("Rahul", 10);
rahul.present();
rahul.present();
rahul.absent();
rahul.absent();
console.log(rahul.calcPercentage());

console.log(rahul);

/* getters and setter
why we require
  -> we require them as some properties should be readonly only for user
  and some props user can change to set that things we have getter and setter 
getters-> readonly  , we cannot set anything there
setters -> read/write we can change but cannot return anything using setters 
 */

class Student {
  constructor({ id, name, dob, grade }) {
    //destructuring of object
    this.id = id;
    this.name = name;
    this._dob = dob;
    this.grade = grade;
    this._marks = 0;
  }

  get dob() {
    // return this.dob; //this makes call to itself and lead to infinite recursion
    return this._dob; //helps to get rid to infinite recursion
  }

  set marks(newMarks) {
    // this.marks=newMarks; // infinite recursion
    this._marks = newMarks;
  }

  get marks() {
    return this._marks;
  }
}

// const stu21=new Student();  wrong -> bcoz above constructor has destrucing if obj so obj should be passed it gives cannot read value of undefined error
// const stu21=new Student({})  --> this is ok it has empty passed
// console.log(stu21.name);     --> due to above line this line returns undefined until we pass default parameter in constructor

const stu21 = new Student({
  id: "ST-12",
  name: "Krish",
  dob: "30-12-2002",
  grade: 12,
});

stu21.marks = 120;
console.log({ stu21 });

/* static methods/properties 
what?
-> these are props/methods which only belong to class
-> they not belong to instaance of class
-> so we cannot acces using an instance
why?
-> here we do not need instance to access the props/method 
-> if we want to acces props/methods we can do it without instance
how?
*/

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  static guest() {
    return new User("guest", "guest");
  }
}

const guestUser = User.guest(); // without creating instance we access guest method [static keyword]
console.log(guestUser);

/* private properties -> sensitive info which we do not want user to have
-> if we use # it is private property
-> it can be only accessible inside class
-> methods can also be private
 */
class Bank {
  #pin = 1234; //#used so pin  is not private data
  constructor(firstPin) {
    this.#pin = firstPin;
    this.balance = 0;
  }
  deposit(amount) {
    amount > 0 ? (this.balance += amount) : "enter amount more than 0";
  }
  withdraw(amount, userPin) {
    if (amount > 0 && this.balance >= amount) {
      return userPin === this.#pin
        ? (this.balance -= amount)
        : "enter correct pin";
    }else{
        console.log("not enough balance");
    }
  }

  checkBalance(userPin){
    return userPin === this.#pin ? this.balance : "wrong pin";
  }
}

const sbi = new Bank(9870);
sbi.deposit(120);
console.log(sbi.checkBalance(9870));
sbi.withdraw(50,9870);
console.log(sbi.checkBalance(9870));

console.log(sbi["#pin"]); //unable to access the value of PIN -> prints undefined
console.log(sbi.pin); //unable to access the value of PIN -> prints undefined




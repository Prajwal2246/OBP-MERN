const user1 = {
  name: "Vaibhav",
  age: 21,
  city: "noida",
  printDetails: function () {
    console.log(`${this.name} is ${this.age} years`);
  },
};

const user2 = {
  name: "devanshu",
  age: 21,
  city: "pune",
  printDetails: function () {
    console.log(`${this.name} is ${this.age} years`);
  },
};

const user3 = {
  name: "Deepanshu",
  age: 25,
  city: "delhi",
  printDetails: function () {
    console.log(`${this.name} is ${this.age} years`);
  },
};

/* why we need constructor 
  -> it is like creating blueprint of object
  -> instead of writing the same properties and methods again and again
    we create a single blueprint
  -> and reuse it to create multiple instance of object
  -> this makes code resuabale
*/

//constructor
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.printDetails = function () {
    console.log(`${this.name} is ${this.age} years`);
  };
}

//creating instance of user object
const user4 = new User("neha", 21, "noida");
console.log(user4.name);

//proto object
console.log(user4.name.__proto__);

User.prototype.greet = function () {
  console.log(`hello ${this.name}`);
};
user4.greet();

/* why we need this keyword
 -> it creates new empty obj
 -> this(previously ) refers to global bcoz of new it refer to empty obj 
 -> by default it return no need to write explicitly
 -> maps the default prototype to the one we create
*/

//creating an array of objects usin constructor
const names = ["rahul", "tanmay", "tejas", "kunal"];
const age = [12, 32, 10, 13];
const city = ["Pune", "delhi", "mumbai", "goa"];

const objArr = [];

for (let i = 0; i < names.length; i++) {
  objArr.push(new User(names[i], age[i], city[i]));
}
console.log(objArr);

function Product(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.total = price * qty;
}

const product1 = new Product("bootle", 10, 20);
console.log(product1);

function Student(name, age, section) {
  this.name = name;
  this.age = age;
  this.section = section;
}
Student.prototype.greetMe = function () {
  console.log(`hi ${this.name}`);
};

// same as above it never takes the name parameter you  passed it just takes this.name from instance
// Student.prototype.greetMe=function(name){
//     console.log(` ${this.name}`);
// }

const stu1 = new Student("sa", 22, 1);
stu1.greetMe();

function Test() {
  this.value = 10;
}
Test.prototype.value = 100;
const test1 = new Test(); //instance

console.log(test1.value);
delete test1.value;
console.log(test1.value);

/* visualization
  
  blueprint ------------------------------->  instance          
  []                                            [value=10]
  prototype
  [value=100]. -> bcoz of line 113
   


  so first log will print 10
  then delete 
  then second log will print 100 from prototype
 */

//creating a task queue that will add,remove,display the latest task
function TaskQueue() {
  this.tasks = [];
}
TaskQueue.prototype.add = function (taskName) {
  this.tasks.push(taskName);
};
TaskQueue.prototype.remove = function () {
  this.tasks.shift();
};
TaskQueue.prototype.display = function () {
  console.log(this.tasks.join(", "));
};

const task1 = new TaskQueue();
task1.add("task1");
task1.add("task2");
task1.remove();
task1.add("task3");
task1.add("task4");
task1.display();
task1.remove();
task1.display();

const user1={
    name:"Vaibhav",
    age:23,
    city:"Noida",
    printDetails:function (){
        console.log(`${this.name} is ${this.age} years old and currently living in ${this.city}`);
    }
}

const user2={
    name:"Devanshu",
    age:22,
    city:"Pune",
    printDetails:function (){
        console.log(`${this.name} is ${this.age} years old and currently living in ${this.city}`);
    }
}


const user3={
    name:"Tanmay",
    age:22,
    city:"Pune",
    printDetails:function (){
        console.log(`${this.name} is ${this.age} years old and currently living in ${this.city}`);
    }
}

//why we need constructor
/* -> it is like blueprint for creating ob
   -> instead of writing the same properties and methods again and again
   -> we create a single blueprint
   -> and reuse it to create multiple objects
   -> this makes code resuabale
 */
//constructor
function User(name,age,city){
    this.name=name,
    this.age=age,
    this.city=city,
    this.printDetails = function (){
        console.log(`${this.name} is living in ${this.city}`);
        
    }
}

//conventional way of using obects
console.log(user1.printDetails());


//using objects created from constructor -> it is same as user1
const user4 = new User("Neha",20,"Nashik");
console.log(user4.name);


//proto obj
console.log(user1.name.__proto__);


//normal function this
function normalFunction(){
    console.log(this);
}

normalFunction();


/* what does this new keyword does? 
  -> whenever use write new before any function
  -> this new keyword creates an empty obj 
  -> and also previously it pointed to some window/global object
  -> it moves this pointer from that window/global obj to the newly created empty obj
  -> and in function we use this.age ,this.name it is added to the newly crearted obj
  -> also new keyword returns this object (bydefault returns)
  -> instance is created using new keyword
  -> so that we can change in any particular instance and it will never affect other instances
  -> maps default  prototype  with newly created 
*/


//create an array of objects using constructor 
const names = ["rahul","tanmay","tejas","kunal"];
const age=[12,32,10,13];
const city=["Pune","delhi","mumbai","goa"];


const objArr=[];
for(let i=0;i<names.length;i++){
  objArr.push(new User(names[i],age[i],city[i])) ;  
}


console.log(objArr);


function Product(name,price,qty){
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.total=price*qty;
}

const product1=new Product("bootle",10,50);
console.log(product1);

//Prototypes
const boolean = true;
const string ="abc";
const num = 12;
const arr= [];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(num.__proto__);
console.log(arr.__proto__);

function Student(name,age,section){
   this.name=name;
   this.age=age;
   this.section = section;

}
Student.prototype.greetMe = function (name){
  console.log(`hi ${name}`);
  
}


const student1 = new Student("raj",20,3);
student1.greetMe(student1.name);


//find the output
function Test() {
  this.value = 10;
}
Test.prototype.value = 100; //runs first
const test = new Test();

console.log(test.value);  
delete test.value
console.log(test.value);

//explanation:
 /* Test[] it has prototype[value=100]
   then using new -> created emptty obj then it has
    [value=10]
    ->so the first log will have value as 10
    ->and then we delete test.value deleted value=10
    ->then second log will search in prototype it will have 
      value as 100.
*/

//mixing up constructor and prototype
//creating a task queue that will add,remove,display the latest task
function TaskQueue (){
  
    this.tasks = [];
}
TaskQueue.prototype.add = function (taskName){
  this.tasks.push(taskName)
}
TaskQueue.prototype.remove = function (){
    this.tasks.shift();
}
TaskQueue.prototype.display = function (){
  console.log(this.tasks.join(", "));
  
}

const task1=new TaskQueue();
task1.add("task1");
task1.add("task2");
task1.remove();
task1.add("task3");
task1.add("task4");
task1.display();
task1.remove();
task1.display();


/* Prototype chaining */
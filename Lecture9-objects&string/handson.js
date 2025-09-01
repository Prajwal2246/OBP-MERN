/* objects */
/* another way of creating objects */
let obj = new Object();

//accessing keys of obj
obj.a = "a";
obj.b = "b";
obj.c = "c";
obj.d = "d";
console.log(obj);

//---------------------------------------------__Strings---------------------------__ */

let str = "a"; //typeof- String
str = "a"; //typeof- String
str = `abc`; //typeof- String
console.log(str[0]); //typeof- String

str = ["a", "b", "c"]; //typeof- Object

//double quotes ->. when single quote is inside string
str = "Hello, I'm Prajwal";
console.log(str);

//single quotes ->. when double quote is inside string
str = 'hello, js is very "important" for mern';
console.log(str);

//backticks --> when variable we want along with string
let a = 5;
str = `value of a is ${a}`;
console.log(str);

//---------------------------------------------__Strings-Methods---------------------------__ */

/* includes:
 -used for char
 -used for words also
*/
str = " hello welcome the mern batch. ";
console.log(str.includes("h")); //boolean value
console.log(str.includes("hello")); //true

/* replace 
 -replaces first occurance
*/
console.log(str.replace("h", "H"));

/* replace all 
-replace all occurances
*/
console.log(str.replaceAll("h", "H"));

/* trim
-trim all starting  and ending spaces
 */
console.log(str.trim());

/* substring */
console.log(str.substring(3)); //llo welcome the mern batch.
console.log(str.substring(3, 9)); //llo we
console.log(str.substring(3, -9)); // he
console.log(str.substring(-3, 5)); // hell
console.log(str.substring(-3, -5)); //(0,0) so empty string return
console.log(str.substring("3")); //llo welcome the mern batch.
console.log(str.substring("-3")); // hello welcome the mern batch. (entire string return asn "-3" convert to num i.e. -3 then it consider as 0 so entire string is returned)
console.log(str.substring(3, 10000)); //3 to length of string
console.log(str.substring(-3, -10)); //empty string

/* slice 
 -behaves same as for array
 -for negative(-ve) values takes from backward
 */
console.log(str.slice(-3)); //h.
console.log(str.slice(3)); //llo welcome the mern batch.
console.log(str.slice(3, 5)); //ll
console.log(str.slice(-100)); // hello welcome the mern batch. it returns the last 100 characters.
console.log(str.slice(100)); //it returns an empty string
console.log(str.slice("10")); //come the mern batch.
console.log(str.slice("-10")); //rn batch.
console.log(str.slice(-100, 100)); // hello welcome the mern batch.

/* wrapper Objects */
const string = "Name";
const number = 24;
const bool = true;
const object = {
  name: "Prajwal",
};

console.log(string.__proto__); //it gives all the functions inside the wrapper class
console.log(number.__proto__); //it gives all the functions inside the wrapper class
console.log(bool.__proto__); //it gives all the functions inside the wrapper class
console.log(object.__proto__); //it gives all the functions inside the wrapper class

/* rest and spread operator */
function addStudent(students, ...studentName) {
  console.log(studentName);
  for (let student of studentName) {
    students.push(student);
  }
}

const students = ["aman", "priya", "pranjal"];
addStudent(students, "rahul"); //['rahul']
addStudent(students, "samrudhi", "roy", "kajol"); //['samrudhi', 'roy', 'kajol']
console.log(students); // ['aman', 'priya', 'pranjal', 'rahul', 'samrudhi', 'roy', 'kajol']

/* destructuring */
const [abc, def] = ["hi", "bye"];
console.log({ abc, def }); //{abc: 'hi', def: 'bye'}

const [hi, ...bye] = ["hi", "bye", "bye1", "bye2"];
console.log({ hi, bye }); //{hi: 'hi', bye: Array(3)}

//hw spread operator with objects
const obj1 = { 
    a:1, 
    b: 2 
};
const obj2 = {...obj1};
console.log(obj2);          //{a: 1, b: 2}

const obj3={
    c:3,
    d:4
}
const merged = {...obj1,...obj3}
console.log(merged);          ///{a: 1, b: 2, c: 3, d: 4}

const person={
    name:"Prajwal",
    age:22,
    country:"new york"
}
const infoUpdate={
    ...person,age:27,country:"India"
}
console.log(infoUpdate);  //{name: 'Prajwal', age: 27, country: 'India'}

/* const { password, ...safeUser } = { 
   username: "admin",
   password: "1234" ,
};
console.log(safeUser); */  //password has username but destruturing makes  safeUser have everything else password
//so output is {username: 'admin'}

/* const { password, ...safeUser } = { 
   username: "admin",
   password: "1234" ,
   user:"prajwal"
};
console.log(safeUser);//{username: 'admin', user: 'prajwal'} */
const { user, ...safeUser } = { 
   username: "admin",
   user:"prajwal",
   password: "1234" 
};
console.log(safeUser);  //{username: 'admin', password: '1234'}
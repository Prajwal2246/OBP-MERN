/* objects */

let obj={
  propert1 :"propert1",
  propert2:"propert2"
}

obj.propert3="propert3";
console.log(obj);

//object keys can be accesa
obj.arrPropery=[1,2,3,4];
for(let i of obj.arrPropery){
  console.log(i);
  
}

//another way of creating an object
const newObj = new Object();
newObj.a = "a"
newObj.b = "b"
newObj.c = "c"
newObj.d = "d"

console.log(newObj);


/* -------------------------//---------------------------------------------__Strings---------------------------__ */

let str='a';
console.log(typeof str);  //string
 
//string using single  quotes
str = 'abc';
 console.log(typeof str); //string


//string using double quotes
str = "abc";
 console.log(typeof str); //string

str=['a','b','c','d'];
 console.log(typeof str);  //object
 console.log(typeof str[0]); //string


//string with backticks
str = `abc`
console.log(typeof str); //string

//when we must use double quotes
str ="hi i'm Prajwal"
console.log(str);

//when we must use single quotes
str='hi you must do "java" classes '
console.log(str);

//when we must use backticks
str=`hi i'm Prajwal and you must do "java" classes`
console.log(str);

//some more features of backticks -- we can insert a variable
const a=5;
str = `hello value of a is: ${a}`
console.log(str);

//-------------------------------------------some methods  in String -------------------------------------------
str = "  we're going to see some methods of strings.   ";

//includes
console.log(str.includes('g'));
console.log(str.includes('a'));

//includes also can check for words
console.log(str.includes('going'));
console.log(str.includes('are'));

//replace function -> replaces first occurrance
console.log(str.replace("w","X"));
console.log("(replace): doesnt change the original string: ",str); 

//repalceAll
console.log(str.replaceAll("e","i"));
console.log("(replaceAll): doesnt change the original string:",str);

//trim
const trimmedstr=str.trim();
console.log("trimmed string:",trimmedstr);
console.log("(trim): doesnot change original str:",str);


//substring() -> gives substring  -> creates new string
console.log("gives start at 3 and end at 9: ",str.substring(3,9));
console.log("gives start at 3 and not given ending(takes upto length) : ",str.substring(3));
console.log(str.substring("3")); 
console.log(str.substring(-3)); //considers -3 as 0 
console.log(str.substring(-3,-10)); //gives empty string
console.log(str.substring(-3,1000000)); ///takes upto length only


//slice -> same as substring but changes (-ve)ves differently
console.log(str.slice(3));
console.log(str.slice(-10)); //pichese  10 elements print krega
console.log(str.slice(3,5));//(3,4)
console.log(str.slice());
console.log(str.slice(-100)); //complete string pichese 100 elemetns print karega
console.log(str.slice(-9,-3));  //last  ke 9 elments se start to end last ke 3rd element pr


//split -> splits the string based on
console.log(str.split(","));  //return array
const line ="hello welcome to Mern Stack Course";
const count =line.split(" ");
console.log(count.length );
const line2 ="hello welcome to Mern Stack Course  ";
const count2 =line.split(" ");
console.log(count2);

//toUpperCase
console.log("hello".toUpperCase());

/*wrapper objects */
const string = "vaibhav";
const number = 67;
const bool = true;
const object={
  name:"vaibhav"
}

console.log(string.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(object.__proto__);

/* -----------//---------------------------------------------spread operator and rest operator-----------//---------------------------------------------*/
//Rest operator
function addStudent(students,...studentName){
  // students.push(studentName);
  // console.log(students);
  console.log(studentName);
  for(let student of studentName){
    students.push(student);
  }
  console.log(students);
  
}

const students=["rahul","riya","Prem"]
addStudent(students,"abhishek","Prateek","Surbhi");


/* destructuriong */
const [abc,def]=["hi","bye"]
console.log({abc,def});

const [hi,...bye]=["hi","bye","bingo"]
console.log({hi,bye});

/* spread operator */
const arr1=[1,2,3,5];
console.log(arr1);
console.log([...arr1]);
console.log(([0,...arr1,89,129]));

/* hw: use spread operator with objects */






















 

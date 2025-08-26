//functions

//function creation/defination 
/* function greet() {
    console.log("Hello world");

}
function greetbye(){
    console.log("bye world");
    
}

//calling/Invoking a function 
greet();
greet();
greetbye();
greetbye();
greet();
greetbye();
greetbye();
greet();
greet(); */


/*
function Properties
- Naming rules are same as variable naming rules
- calling/invoking a function
- Function creation/defination
- Parameter?

*/

/*
Paramterized functions*/
/* function greetUser(username) {
    console.log("hello " + username);
}
greetUser("rahul"); */
/* Multiple parameter */
/* function greetUser(firstname,lastname) {
    console.log("hello " + firstname+" "+lastname);
}
greetUser("rahul","wanjare"); */


/* Parameter and default value */
/* 
function welcome(username1,place="app"){
  console.log(`hello ${username1},welcome to our ${place}.`);
  
}
welcome("Rahul","website");
welcome("sargar");

function sum(a,b){
    console.log(a+b); //3 + undefined
}
sum(1);
function sum2(a=0,b=0){
    console.log(a+b);
    return a+b;
}
sum2(1,3); //4
let sum13 =sum2(1,3);
console.log(sum13); */



/* Nested functions */
/* function personalDetails(name,birthYear){
    console.log("Name: ", name);
    console.log("Age: ",calculateAge(birthYear))
}

function calculateAge(birthYear){
    return 2025-birthYear;
}


personalDetails("jayesh",2001);
console.log(personalDetails("jayesh",2001)) //undefined

//functrion to calculate square of number

function square(num){
    return num*num;
}
let ans = square(20);
console.log(ans) */

//-----------------ARRAYS------------------
const students = ["rahul", "punnet", "pratik", "riya"];
console.log(students[1]);
//print roll no and name of 4th student
// console.log(4, students[3]);
//for in loop

/* for(let i in students){
    //i ->datatype=string
    console.log(Number(i)+1,students[i])
} */
//print all students with even roll number
for(let i in students){
    if((Number(i)+1 )%2 === 0){
        console.log(i,students[i]);
    }
}
//for of


//homogeneous property of array -
const arr2=[1,2,3,4,5];

//heterogeneous property of arr
// const arr3=["hello",1,welcome]

//some functions of array
const iplTeams = ["csk","mi","rcb"];
 //add some elements
 //1
 iplTeams.push("gt");
 console.log(iplTeams)

 //2 pop from end
 iplTeams.pop()
 console.log(iplTeams)

 //3 insert from start
 iplTeams.unshift("kkr");
 console.log(iplTeams)

 //4 delete from start
 iplTeams.shift("csk");
 console.log(iplTeams);

 //slice
 console.log("sliced: ",iplTeams.slice(1));
console.log(iplTeams);
console.log("slice -2: ",iplTeams.slice(-2));//keeps 2 element from end


/* weird behaviour
 const arr = new Array(2);
 console.log(arr);

 it creates an empty array of length 2.
*/
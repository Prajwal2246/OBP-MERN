/*  Objects */

let studentObj = {
  name: "Prajwal",
  age: 22,
  address: "gadchiroli",
  class: "college",
};

// console.log(studentObj);

let personObj = {
  name: "Raj",
  age: 22,
  city: "Pune",
};
personObj.hobby = "singing";
// console.log(personObj);
personObj.city = "delhi";
// console.log(personObj);

//----------------------------------------priting square brackets
// console.log(personObj.age);
// console.log("Raj's age is using [] bracket: " + personObj["age"]);

/* ---------------------------------------- nested object*/
let obj = {
  name: "prajwal",
  age: 22,
  city: "delhi",
  qualification: {
    course: "btech",
    college: "jspm rscoe ",
  },
};
// console.log(obj);

/* array of objects */
let array = [
  {
    personObj,
    studentObj,
  },
];

// console.log(array);

/* ---------------------------------------- array of students and log city pune */

const student = [
  {
    name: "Rahul",
    gender: "male",
    age: 22,
    grade: "B",
    address: {
      addressLine1: "Lakeview Residency",
      addressLine2: "Kondhwa, Pune",
      houseNo: 303,
      city: "pune",
    },
  },
  {
    name: "Priya",
    age: 14,
    gender: "Female",
    grade: "9th",
    address: {
      addressLine1: "Hilltop Towers",
      addressLine2: "Jayanagar, Bangalore",
      houseNo: 404,
      city: "delhi",
    },
  },
];
// console.log("details of student residing in Pune",student);

for (let i of student) {
  if (i && i.address && i.address.city === "pune") {
    // console.log(i.name,i.age,i.address.houseNo);
  }
}

/* ---------------------------------------- functions inside object---------------------------------------- */
/* - are normal functions ,can be accessed as same as props  */

const carobj = {
  car: "mercedes GLS",
  color: "white",
  mileage: 10,
  currSpeed: 0,

  // running :function running(){
  //   console.log("this car is running....");
  // }
  running() {
    console.log("this car is running>>> speed is ",carobj.currSpeed);
  },
};
// carobj.running();

/*  ----------------------------------------this keyword in objects ---------------------------------------- */
/* 
 -each object has its own this keyword which has access inside everything in that object
 -scope of this : (only inside the object)
 -mostly used  in functions inside object
 */
const carobj1 = {
  car: "mercedes GLS",
  color: "white",
  mileage: 10,
  currSpeed: 12,

  // running :function running(){
  //   console.log("this car is running....");
  // }
  running() {
    console.log("this car is running. and speed is "+this.currSpeed);
  },
};

// carobj1.running();

/* 
obj - name:piyush
skills=["c++","js","MERN"] 
write a function showSkills() which will show each skill in one line , seperated
and addSkill(skillName)- add a skill to skill array
*/

let portfolio={
  name:"piyush",
  skills:["mern","js","c++"],
  showSkill(){
    let allskills="";
    for(let skill of this.skills){
      allskills+=skill+",";
    }
    console.log(allskills);
  },
  addSkill(newSkill){
    this.skills.push(newSkill);
  },
}
portfolio.showSkill();
portfolio.addSkill("python");
console.log((portfolio));








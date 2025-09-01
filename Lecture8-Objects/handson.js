/* objects */
let obj={
    firstname:"prajwal",
    lastname:"Janbandhu",
    age:22
}

console.log(obj);

obj.hobby="singing"
console.log(obj);

/* nested obj */
let obj2={
    firstname:"prajwal",
    lastname:"Janbandhu",
    age:22,
    qualification:{
        degree:"btech",
        yop:24
    }
}
console.log(obj2);

//array of objects 
let student = [
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
]

for(let i of student){
    if(i && i.address.city.toLowerCase() === "pune"){
        console.log(i.name,i.age,i.address.houseNo);  
    }
}

let carObj2={
  name:"mercedes",
  model:1996,
  mileage:10,

  //using this
 /*  running(){
    console.log("mileage of car is:"+this.mileage);
  } */
  running(){
    console.log("mileage of car is:"+carObj2.mileage);
  }
}

carObj2.running();

/* 
obj - name:piyush
skills=["c++","js","MERN"] 
write a function showSkills() which will show each skill in one line , seperated
and addSkill(skillName)- add a skill to skill array
*/

let porfolio={
  name:"prajwal",
  skills:["c++","java","mern"],
  showSkills(){
    let allskill="";
    for(let i of this.skills){
      allskill+=i+',';
    }
    console.log(allskill);
  },
  addSkills(newSkill){
    this.skills.push(newSkill);
  }
}
porfolio.showSkills();
porfolio.addSkills("python");
porfolio.showSkills();
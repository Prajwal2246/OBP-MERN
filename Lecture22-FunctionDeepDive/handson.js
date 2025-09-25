/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [
    { id: 1, scores: [10, 34, 80] },
    { id: 2, scores: [100, 49, 99] },
    { id: 3, scores: [63, 43, 70] },
    { id: 4, scores: [50, 50, 90] },
  ],

  display: function () {
    // loop over players and display their id and scores
    this.players.forEach((item) => {
      console.log(`Player id: ${item.id} , scores are: ${item.scores} `);
    });
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
    const existplayer = this.players.find((player) => player.id === id);
    if (existplayer) {
      console.log(`player with id:${id} already exist`);
      return;
    } else {
      this.players.push({ id: id, scores: [] });
    }
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    const player = this.players.find((player) => player.id == id);
    if (player) {
      player.scores.push(score);
    } else {
      console.log("no player found");
    }
  },

  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
    const player = this.players.find((player) => player.id === id);
    if (!player) {
      console.log(`No playwer with ${id}`);
      return;
    }
    if (player.scores.length === 0) {
      console.log("No scores available");
      return;
    }
    const totalScore = player.scores.reduce((acc, val) => acc + val, 0);
    const avg = totalScore / player.scores.length;
    return avg;
  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
    let teamtotal = 0;
    let totalmatchesPlayedbyplayers = 0;
    this.players.forEach((player) => {
      teamtotal += player.scores.reduce((acc, curr) => acc + curr, 0);
      totalmatchesPlayedbyplayers += player.scores.length;
    });
    return teamtotal / totalmatchesPlayedbyplayers;
  },
};

team.addPlayers(4);
team.addPlayers(5);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57

/* functions 

types of functions
*/

/* 
1.Arrow function
 -> these are not hoisted but variable is hoisted
 -> they do not have thier own `this` keyword
*/
const arrowfunc = (a, b) => {
  return a - b;
};
console.log(arrowfunc(5, 3));

/* check if number is divisible by 3 */
const checkDivByThree = (a) => !(a % 3);
console.log(checkDivByThree(9));

const student = {
  fullName: "Prajwal Janbandhu",
  age: 22,
  result1: function (resultStatus, percent) {
    if (percent < 45) {
        console.log(this.fullName + " has failed,his percentage is "+percent );
        return;
    } else {
      console.log(this.fullName +"'s result is " +resultStatus +" with " +percent +"%");
    }
  },
  result2: (resultStatus)=>{
    console.log(this.fullName +"-->"+ resultStatus);
    console.log(this); //window properties using this keyword in arrow function
  }
};

student.result1("passed", 92);
student.result1("passed", 32);
student.result2("arrow function not have their own this it refers to window object", 32);


/* anonymous function 
-> it is a function with no name
*/

/*  HOF-High Order Functions
-> these are the function which
  either take function as argument / return a function

->Types of HOF
1.forEach()
2.map()
3.filter()
4.reduce()
5.find()
*/

/* 
1.forEach()
 ->forEach((value,index,arr))
 -> it doesnot return anything 
 -> we can loop on every elemtn in array
 -> doesnot change the original array
*/
let arr=[2,1,6,3,9];
arr.forEach((value,index,arr)=>{
    console.log(value*2);
})
let users=[
  { name: "Ramesh", age: 20 },
  { name: "rahul", age: 32 },
  { name: "kunal", age: 12 },
];
users.forEach((user)=>{
    console.log("name: "+user.name +", age:"+ user.age);
})

/* 
2.filter()
-> filter(value,index,array)
-> it loops on each and every element and check weather it satisfies the condition
-> return a new array
-> not change original array 
*/
const filteredArr=users.filter((user)=>user.age>18)
console.log(filteredArr);
console.log(users);

const uppercaseUsername = users.filter((user)=>{

    if(user.name.charAt(0) === user.name.charAt(0).toUpperCase()){
        return user;
    }
})
console.log(uppercaseUsername);

/* 
3.map()
-> not change orginal array
-> return new array
-> transform the array
*/
let names=["Rahul","Amar","sanket","gopal"];
const upper=names.map((name)=>{
    return name.toUpperCase();
})

console.log("original array",names);
console.log("uppercase names array using map",upper);


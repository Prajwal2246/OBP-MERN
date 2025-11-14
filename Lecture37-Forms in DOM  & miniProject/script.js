/* 
event propagation 
capturing phase[p2c] -> when third parameter given as true consolelog we have from parent to child
bubbling phase[c2p] -> when we not give third parameter, then log is child to parent;
target phase -> when single element is triggered
*/
const container=document.querySelector(".container");
const outerdiv= document.querySelector(".outer-div");
const innerdiv=document.querySelector(".inner-div");

//outerdiv
container.addEventListener("click",()=>{
    container.style.backgroundColor="red";
    console.log("outer clicked");
    
},true)

//innerdiv
outerdiv.addEventListener("click",()=>{
    outerdiv.style.border="7px solid black";
    outerdiv.style.backgroundColor="blue"
    console.log("inner clicked");
},true);


//h1
innerdiv.addEventListener("click",(e)=>{
    // e.stopPropagation() ;
    innerdiv.style.border="7px solid black";
    innerdiv.style.backgroundColor="white"
    console.log("h1 clicked");
},true);



//hw-> stopPropagation().



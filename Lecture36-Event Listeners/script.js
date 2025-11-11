//creating an element
const h3Elem = document.createElement("h3");
//add text
h3Elem.textContent = "this is h3 element";

//adding elem to dom -> appendChild
const div = document.querySelector("div");
// div.append(h3Elem);
// div.prepend(h3Elem);  //at first
div.appendChild(h3Elem);

//dom element already present and we append it then it comes to last of parent
const h3 = document.querySelector(".h3");
div.appendChild(h3);

// hw:append vs appendChild , remove vs removeChild

/* -------_EVENTS_---------- */

//1.click event
const para = document.querySelector(".para");
//event type.  callback function
para.addEventListener("click", (event) => {
  paraClicked(event);
});

//2.mouseover
para.addEventListener("mouseover",()=>{
    para.style.backgroundColor="yellow";
});
//3.mouseup
para.addEventListener("mouseup",()=>{
    para.style.border="3px solid black";
});
//4.mousedown
para.addEventListener("mousedown",()=>{
    para.style.backgroundColor="red";
    console.log("mousedown clicked")    
});
//5.keyup
document.addEventListener("keydown",()=>{
    para.style.color="red";
    console.log("keypdown");
    
});
//6keydown
document.addEventListener("keyup",()=>{
    para.style.fontSize="51px";
})


//remove
function paraClicked(event) {
  h3.remove();
  para.innerHTML = "<h1>Para Clicked</h1>";
  console.log("para,event is",event.type);
}
//removeChild
const paraone=document.querySelector(".paraone");
div.removeChild(paraone);
//creating an element using js and adding it

//create
const h3Elem = document.createElement("h3");
h3Elem.textContent = "I am h3 element added using js";
//adding
const divone = document.querySelector(".divone");
divone.appendChild(h3Elem);
//prepend  -> add  to  start of element

//if we add an element which is already present in the DOM then it get added to DOM but to the last of its parent as lastchild

//append vs appendChild
/* append: nodeObj and DOMString
  ->This method is used to add an element in form of a Node object or a DOMString (basically means text)
  appendChild:  nodeObj
  ->Similar to the .append method, this method is used to elements in the DOM, but in this case, only accepts a Node object.
*/
const appendvsAppendChildDiv = document.querySelector(".appendAppendChild");

//append
const childAppendChild = document.createElement("p");
childAppendChild.textContent = "this is example of append";
appendvsAppendChildDiv.append(childAppendChild); //node obj inserted
appendvsAppendChildDiv.append(
  "this is DOMString or we can say simply text added using append"
); //DOMString or text

//appendChild
const child = document.createElement("p");
child.textContent = "example of appendChild";
appendvsAppendChildDiv.appendChild(child); //added to DOM
// appendvsAppendChildDiv.appendChild("this is") //but not added it only accepts node objects

//append vs appendChild adding multiple elements
appendvsAppendChildDiv.append('child1 child2 "hello"'); //works fine
// appendvsAppendChildDiv.appendChild('child1 child2 "hello"'); //only add first elem

/* ---------Events in JS------- */
const btn = document.querySelector(".btn");

//click
btn.addEventListener("click", (e) => {
  console.log("clicked", e.type);
});

//hover ->mouseover
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "yellow";
});

//mousedown
btn.addEventListener("mousedown", () => {
  btn.style.width = "220px";
});

//mouseup
btn.addEventListener("mouseup", () => {
  btn.style.backgroundColor = "red";
});

//keydown
document.addEventListener("keydown", () => {
  btn.style.fontSize = "21px";
});

//keyup
document.addEventListener("keyup", () => {
  btn.style.border = "3px solid black";
  btn.style.borderRadius = "12px";
});


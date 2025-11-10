// window Object: All global JavaScript variables, functions, and objects defined in the browser's global scope automatically become properties and methods of the window object.
console.log(window.document.body);
console.log(document.body);

/* childNodes vs children */
console.log(document.body.children); /* give htmlCollection exactly what we written as output->tags/attributes/nodes */
console.log(document.body.childNodes);/* gives NodeList also gives text along with what we written here text is the space  between html tags -> Nodes+text nodes */

/* firstChild vs firstElementChild */
console.log(document.body.firstChild); //text as output
console.log(document.body.firstElementChild); //first div which we written is output

/* Selectors */
// 1.querySelector
console.log(document.body.querySelector("div"));
console.log(document.body.querySelectorAll("div"));

//2.getElementById
console.log(document.getElementById("main-child-one"));

//3.getElementsByClass
console.log(document.getElementsByClassName("main"));

//4.getElementsByTagName
console.log(document.getElementsByTagName("div"));

/* Changing css  */
let para1 = document.getElementsByClassName("para-one")[0];  //one way
console.log(para1);
para1.style.backgroundColor="red";

/* setAttribute */
para1.setAttribute("name","para-one") //added name attribute and set value
para1.setAttribute("name","paras")// update the value
para1.setAttribute("name",null) //delete -> not exaclty but set val as null
para1.setAttribute("data-val",120);

/* innerHtml  vs TextContent */
// console.log(para1.innerHTML); //content+html
// console.log(para1.textContent); //only content
const contentPara = para1.textContent;
para1.innerHTML=`<strong>${contentPara}</strong>`;
console.log(para1.textContent); //only content
console.log(para1.innerHTML); //strong tag also shwoing along with content
 
const para2=document.querySelector(".para-two");//accessing 
para2.textContent="This is new Content" //updating the value

/* 
  innerhtml vs textContent;
 */
const p = document.querySelector(".para-three");
console.log(p.innerHTML)
console.log(p.textContent);


/* className  */
const sectionElem=document.querySelector(".class1");
console.log(sectionElem.className);
// sectionElem.className="";  //using className removed all class
// console.log(sectionElem.className);
// sectionElem.className="abc"; //assign class using className 
// console.log(sectionElem.className);
// sectionElem.className="abc class class2"; 
// console.log(sectionElem.className);

const classes = sectionElem.className.split(" ");
classes.splice(1,1);
sectionElem.className=classes.join(" ");

/* classList */
const sectionCopy = document.querySelector(".class1");
console.log(sectionCopy.classList);
//add
sectionCopy.classList.add("class2")
//remove
sectionCopy.classList.remove("class2");
//contains
console.log(sectionCopy.classList.contains("class2"));
//replace
sectionCopy.classList.replace("class2","class10");
/*
 ->    Using "classList", you can add or remove a class without affecting any
        others the element may have. 
 ->    But if you assign "className", it will 
         wipe out any existing classes while adding the new one (or if you 
        assign an empty string it will wipe out all of them).
*/


/* 
Practical example where we use setAttribute -> any  shoppin card on click on card we can set border radius and give styling */

const content=document.body.querySelector(".para-two").innerHTML;
console.log(content);













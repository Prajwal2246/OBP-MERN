console.log(window.document.body);
console.log(document.body);

/* childNodes vs children*/
console.log(
  document.body.childNodes
); /* here we get text as node also it considers the spaces written in html as text node */
console.log(
  document.body.children
); /* here we get the exact children/tags we written in html */

/* firstChild  vs firstElementChild*/
console.log(
  document.body.firstChild
); /* it gives the first child of the body it can be text node */
console.log(
  document.body.firstElementChild
); /*  it doesnot give the text node just give the real children which we write in html */

/* Selectors 
1. queryselector
*/
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelector(".first-div-child"));
console.log(document.querySelector("div.first-div"));
console.log(document.querySelector("div#second-div"));

/* 2. getElementById */
console.log(document.getElementById("second-div"));
// getElementsClassName
console.log(document.getElementsByClassName("first-div"));
// getElementsByTagName
console.log(document.getElementsByTagName("div"));

/* changing elements color on html */
const para = document.querySelector("p");
console.log(para);

para.style.color = "red";
para.style.backgroundColor = "black";

//setAttribute->update,add new val,delete
const img = document.querySelector("img ");
//upadte

img.setAttribute("src", "image.png");
const firstDiv = document.querySelector(".first-div");

//add new
firstDiv.setAttribute("data-value", 500);

//set to null
firstDiv.setAttribute("data-value", null);

/*  */
console.log(para.innerHTML); //html bhi milta hai
console.log(para.textContent); //sirf text milta hai

const paraContent = para.textContent;
para.innerHTML = ` <strong>${paraContent}</strong>`;

const name = document.querySelectorAll("p")[1];
name.textContent = "Prajwal";

/* difference between innerHTMl,textContent */
console.log(para.innerHTML);
console.log(para.textContent);

/* accesing the second para */
const paraTwo = document.querySelector(".second-para"); //accesing
paraTwo.textContent = "this is new content"; //updating value

//className property
// const sectionElem = document.querySelector(".class1");
// //deleting a class
// const classes=sectionElem.className.split(" ");
// classes.splice(2,1);
// // sectionElem.setAttribute("class",classes.join(" "));
// sectionElem.className=classes.join(" ");

// classList
// space seperated values -> DOMTokenList
const sectionCopy = document.querySelector(".class1");
console.log(sectionCopy.classList); //space seperated attributes value hai -> returns as DOMTokenList
//add
sectionCopy.classList.add("class5");
//remove
console.log(sectionCopy.classList.remove("class7")); //class7 not present so it return undefined
//toogle
sectionCopy.classList.toggle("class3"); //class hai to delte hogi vrna nh hai to add hogi
//contains
console.log(sectionCopy.classList.contains("class3")); //true
//replace
sectionCopy.classList.replace("class3", "class6");

/* HomeWork
-> Practical example where we use setAttribute  done
-> innerhtml and textcontent difference   done
-> classList vs className.  done
*/
// 

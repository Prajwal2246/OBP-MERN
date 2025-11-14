/* event propagation:Event propagation in JavaScript refers to the process by which an event travels through the Document Object Model (DOM) tree when it is triggered
1.Capturing phase : parent to child
2.Bubbling phase : child to parent. [normally this is state]
3.Target phase : on particular element when triggered
 */


const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const h1 = document.querySelector("h1");
//normal - bubbling state
// outer.addEventListener("click",()=>{
//     outer.style.backgroundColor="red";
//     console.log("outer div clicked");
// });


// inner.addEventListener("click",()=>{
//     inner.style.backgroundColor="blue";
//     console.log("inner div clicked");
// });


// h1.addEventListener("click",()=>{
//     h1.style.border="5px solid black";
//     console.log("h1 clicked");
// });

/* in bubbling -> when clicked on h1
 log will be h1->inner->outer
 this is the normal flow of event propagation
*/


//_________Capturing phase ->when third parameter we give as true bydefault it is false
// outer.addEventListener("click",()=>{
//     outer.style.backgroundColor="red";
//     console.log("outer div clicked");
// },true);


// inner.addEventListener("click",()=>{
//     inner.style.backgroundColor="blue";
//     console.log("inner div clicked");
// },true);


// h1.addEventListener("click",(e)=>{
//     h1.style.border="5px solid black";
//     console.log("h1 clicked");
//     e.stopPropagation();
// },true);

/* in capturing phase
log will be outer->inner->h1
*/


//________stop propagation : to stop further event triggering
outer.addEventListener("click",()=>{
    outer.style.backgroundColor="red";
    console.log("outer div clicked");
});


inner.addEventListener("click",()=>{
    inner.style.backgroundColor="blue";
    console.log("inner div clicked");
});


h1.addEventListener("click",(e)=>{
    h1.style.border="5px solid black";
    console.log("h1 clicked");
    e.stopPropagation();
});

/* event.stopPropagation() 
-> here when we do this it stops further event triggering
->The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
-> but if we are in capturing phase it doesnot stop then only in bubbling phase it stops
*/

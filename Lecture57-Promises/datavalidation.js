const submitbtn = document.querySelector("button");
const nameInput= document.querySelector("#form").firstElementChild;
const ageInput= document.querySelector("#form input:nth-of-type(2)");
const dobInput= document.querySelector("#form input:nth-of-type(3)");
const resDiv = document.querySelector("#output-area");


submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    let nameval = nameInput.value;
    let ageval = ageInput.value;
    let dobval = dobInput.value;

    const user={
        name:nameval,
        age:ageval,
        dob:dobval,
    }

    validateUser(user).then(validUser=>{
        resDiv.textContent = " user Validate successfully"
        resDiv.style.color="green";
        console.log(validUser);
        
    }).catch((error)=>{
        
        resDiv.textContent = "❌ " + error;
      resDiv.style.color = "red";
    })
})

function validateUser(user){
    return new Promise((resolve,reject)=>{
        if(!user.name || !user.age || !user.dob){
            reject("fill all details")
            return;
        }
        resolve(user);
    })
}


const users = [];

const submitBtn = document.querySelector("button");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {};
  user.name = document.querySelector("input[type=text]").value;
  user.mobile = document.querySelector("input[type=number]").value; //correct
  user.mobile = document.querySelector('input[type="number"]').value;
  user.gender = document.querySelector("input[name=gender]:checked")?.value;
  user.consent = document.querySelector("input[type=checkbox]").checked;
  user.city = document.querySelector("select ").value;

  if (!user.name || !user.city || !user.gender || !user.consent || !user.city) {
    alert("enter details");
  }

  users.push(user);
  form.reset();
  console.log(users);
});

//diabled button

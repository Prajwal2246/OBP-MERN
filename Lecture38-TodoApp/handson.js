//save to localstorage
function saveTodosToLocalStorage(todos){
    if(todos){
        // Convert the array of todos to a JSON string
        localStorage.setItem("todos", JSON.stringify(todos));
    }else{
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    
}
function  retrieveTodoFromLocalStorage(){
    const todos=localStorage.getItem("todos");
    return todos ? JSON.parse(todos):[];
}


const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const todoInputed = document.querySelector("#todo-input");
  if(!todoInputed.value.trim()) return; //ignoring empty entries

 //add todos
  const section = document.querySelector(".todo-list");
  const divtoBeInserted = document.createElement("div");
  divtoBeInserted.className = "todo-item";
  divtoBeInserted.innerHTML = `
       <p>${todoInputed.value}</p>
          <div class="todo-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
    `;
  section.appendChild(divtoBeInserted);

  //save todo to localstorage
  const todos = retrieveTodoFromLocalStorage(); //load todos from localstorage
  todos.push({todo:todoInputed.value});  //adding new todo
  saveTodosToLocalStorage(todos);

  const editBtn = divtoBeInserted.querySelector(".edit-btn");
  const buttonDiv=divtoBeInserted.querySelector(".todo-buttons");
  editBtn.onclick = () => {
    if(buttonDiv.querySelector(".save-btn")) return;

    //para
    const para = divtoBeInserted.querySelector("p");

    //input for edit
    const newInput = document.createElement("input");
    newInput.value = para.textContent;

    //replace para and showing new input for edit
    para.replaceWith(newInput);
    editBtn.style.display = "none";

    //displaying save btn
    const deleteBtn = buttonDiv.querySelector(".delete-btn");
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "save";
    saveBtn.className="save-btn";
    buttonDiv.insertBefore(saveBtn, deleteBtn);

    //save btn functionality
    saveBtn.addEventListener("click", () => {
        para.textContent=newInput.value;
      saveBtn.style.display = "none";
      editBtn.style.display = "inline";

      newInput.replaceWith(para);
    });
  };
  //delete btn
  const deleteBtn = divtoBeInserted.querySelector(".delete-btn");
  deleteBtn.onclick = () => divtoBeInserted.remove();

  todoInputed.value = "";
});

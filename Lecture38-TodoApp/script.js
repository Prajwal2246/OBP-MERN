const addBtn = document.querySelector(".add-btn");
const todoItemsSection = document.querySelector("#todo-items");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const todoElement = document.querySelector("#todo");

  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.innerHTML = ` <div class="todo-item">
          <p class="para">${todoElement.value}</p>
          <div class="todo-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>`;
  todoItemsSection.appendChild(todoItem);

  const deletebtn = todoItem.querySelector(".delete-btn");
  deletebtn.onclick = () => todoItem.remove();

  // Make save button once per item
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.style.display = "none";

  const btnSection = todoItem.querySelector(".todo-buttons");
  btnSection.insertBefore(saveBtn, deletebtn);

  const editBtn = todoItem.querySelector(".edit-btn");

  editBtn.addEventListener("click", () => {
    const para = todoItem.querySelector(".para");

    // Create NEW input each time
    const input = document.createElement("input");
    input.value = para.textContent.trim();

    todoItem.prepend(input);
    para.style.display = "none";

    editBtn.style.display = "none";
    saveBtn.style.display = "inline";

    // Save handler
    saveBtn.onclick = () => {
      para.textContent = input.value;
      para.style.display = "block";

      input.remove();

      saveBtn.style.display = "none";
      editBtn.style.display = "inline";
    };
  });

  todoElement.value = "";
});

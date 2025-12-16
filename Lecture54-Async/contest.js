/* question1:
<h2>TODO Application</h2>
<form id="todoForm">
  <input type="text" id="taskInput" placeholder="Add Task">
  <button type="submit" id="submitBtn">Add Task</button>
</form>

<ol id="taskList">
  <!-- Tasks will be added here -->
</ol>
 */

const inputEle = document.querySelector("#taskInput");
const submitBtn = document.querySelector("#submitBtn");
const olEle = document.querySelector("#taskList");

class Todo {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}
class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.editId = null;

    this.form = document.querySelector("#todoForm");
    this.list = olEle;
    this.button = submitBtn;
    this.input = inputEle;
  }

  addTodo(text) {
    const todo = new Todo(Date.now(), text);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

    this.render();
  }
  updateTodo(text) {
    this.todos = this.todos.map((todo) =>
      todo.id === this.editId ? { ...todo, text } : todo
    );
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.editId = null;
    this.button.textContent = "Add task";
    this.render();
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.render();
  }
  editTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) return;

    this.input.value = todo.text;

    this.editId = id;
    this.button.textContent = "Update task";
  }
  init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const text = this.input.value.trim();
      if (!text) return;
      if (this.editId) {
        this.updateTodo(text);
      } else {
        this.addTodo(text);
      }

      this.input.value = "";
    });

    this.list.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;

      const id = Number(li.dataset.id);

      if (e.target.classList.contains("delete")) {
        this.deleteTodo(id);
      }
      if (e.target.classList.contains("edit")) {
        this.editTodo(id);
      }
    });

    this.render();
  }
  render() {
    this.list.innerHTML = "";

    this.todos.forEach((todo) => {
      const li = document.createElement("li");
      li.dataset.id = todo.id;
      li.innerHTML = `
             ${todo.text}
             <button class="edit">Edit</button>
             <button class="delete">delete</button>
            `;
      this.list.appendChild(li);
    });
  }
}

const todoapp = new TodoApp();
todoapp.init();

/* que2:

Write a JavaScript code to design a system for vehicles as described below. There are two types of vehicles: Car and Bike. All vehicles have a brand name (e.g., Honda, Toyota) and a year of manufacturing. Vehicles can display their basic information. Cars and Bikes inherit from Vehicle but have their own extra behavior.

Create a Base Class Vehicle with properties - brand (string) and year (number), and a private property #chassisNumber (generate a random 6-digit number inside the constructor). The method displayInfo() should print brand, year, and chassis number.

Create a Subclass Car that inherits from Vehicle. It should have an extra property fuelType (string like petrol/diesel/electric) and override the displayInfo() method to first call the Vehicle’s displayInfo() and then add printing of fuelType also.

Create a Subclass Bike that inherits from Vehicle. It should have an extra property engineCapacity (in cc) and override the displayInfo() method to first call the Vehicle’s displayInfo() and then add printing of engineCapacity.

Finally, create objects of Car and Bike with sample data - Car: brand = "Honda", year = 2022, fuelType = "Petrol", Bike: brand = "Royal Enfield", year = 2021, engineCapacity = 350, and call displayInfo() on both objects. */

class Vehicle {
  #chasisNumber;
  constructor(brand, yOM) {
    this.brand = brand;
    this.yOM = yOM;
    this.#chasisNumber = Math.floor(Math.random() * 900000);
  }

  displayInfo() {
    console.log(`${this.brand},${this.yOM},${this.#chasisNumber}`);
  }
}

class Car extends Vehicle {
  constructor(brand, yOM, fuelType) {
    super(brand, yOM);
    this.fuelType = fuelType;
  }
  displayInfo() {
    super.displayInfo();
    console.log(`${this.fuelType}`);
  }
}
class Bike extends Vehicle {
  constructor(brand, yOM, engineCC) {
    super(brand, yOM);
    this.engineCC = engineCC;
  }
  displayInfo() {
    super.displayInfo();
    console.log(`${this.engineCC}`);
  }
}

const car1 = new Car("Honda", 2022, "Petrol");
car1.displayInfo();

const bike1 = new Bike("Royal Enfield", 2021, 350);
bike1.displayInfo();

/* que3:
A social media platform wants to develop a feature that allows users to create and customize their own profiles. The profile information should be stored locally on the user's device using LocalStorage. The platform wants to implement a Profile class that can be used to create, update, and retrieve profile information. The class should support method chaining for setting different attributes of the profile.

The getValue() method should return the JSON representation of the profile information.

Implement the Profile class such that it supports method chaining for setting attributes like name, age, and interests. For example:

const profile = new Profile();
console.log(profile.setName('John').setAge(30).addInterest('Reading').addInterest('Coding').getValue());
// Output: {"name": "John", "age": 30, "interests": ["Reading", "Coding"]}
Write the code for the Profile class.

class Profile {
  // write code here
}
 */

class Profile {
  constructor() {
    const storedProfile = localStorage.getItem("profile");
    this.data = storedProfile
      ? JSON.parse(storedProfile)
      : { name: "", age: null, interest: [] };
  }

  setName(name) {
    this.data.name = name;
    localStorage.setItem("profile", JSON.stringify(this.data));
    return this;
  }
  setAge(age) {
    this.data.age = age;
    localStorage.setItem("profile", JSON.stringify(this.data));
    return this;
  }
  addInterest(interest) {
    this.data.interest.push(interest);
    localStorage.setItem("profile", JSON.stringify(this.data));
    return this;
  }

  getValue() {
    return JSON.stringify(this.data);
  }
}

/* que4: not understand */

/* que5:As a software developer for a leading e-commerce platform, you are tasked with creating a JavaScript object to store customer profile information. The object should have three properties: name, age, and panCard. The panCard property is a sensitive field that requires special handling. It should be non-modifiable and non-deletable once set, and it should not appear when iterating over the object using for...in loops or Object.keys(). Write a JavaScript code snippet to create this object, ensuring the panCard property meets the specified requirements. */
class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}
class Customer extends Person {
  constructor(name, age, panCard) {
    super(name, age);

    Object.defineProperty(this, "panCard", {
      value: panCard,
      writable: false, // cannot be modified
      enumerable: false, // won't show up in for...in or Object.keys()
      configurable: false, // cannot be deleted or reconfigured
    });
  }
}

//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
  { id: 1, todo: "Buy milk.", complete: false, category: "Grocery" },
  { id: 2, todo: "Clean the cat box.", complete: false, category: "House" },
  { id: 3, todo: "Chips and salsa.", complete: true, category: "Grocery" },
  {
    id: 4,
    todo: "Finish Homework for DGM 3760",
    complete: false,
    category: "School",
  },
];

//filter by category
const groceryItems = initalTodos.filter((item) => item.category === "Grocery");
const schoolItems = initalTodos.filter((item) => item.category === "School");
const houseItems = initalTodos.filter((item) => item.category === "House")

//push new todo to inital array and call displayTodos to display
function newTodo(todoContent, todoCategory) {
  const todoText = {
    id: initalTodos.length + 1,
    todo: todoContent,
    complete: false,
    category: todoCategory,
  };

  initalTodos.push(todoText);
  saveToStorage();

  initTodos(initalTodos);
}

//delete list items
function deleteTodo() {
  const close = document.getElementsByClassName("close");
  for (let t = 0; t < close.length; t++) {
    close[t].addEventListener("click", (event) => {
      const id = event.target.dataset.id;
      const index = initalTodos.findIndex((item) => item.id == id);
      initalTodos.splice(index, 1);
      saveToStorage();
      initTodos(initalTodos);
    });
  }
}

//checkmark
function completeTodo() {
  const check = document.getElementsByClassName("check");
  for (let t = 0; t < check.length; t++) {
    check[t].addEventListener("click", (event) => {
      const id = event.target.dataset.id;
      const index = initalTodos.findIndex((item) => item.id == id);
      initalTodos[index].complete = !initalTodos[index].complete;
      saveToStorage();
    });
  }
}

function initTodos() {
  if (window.localStorage.getItem("todo")) {
    getFromStorage();
  } else {
    saveToStorage();
  }

  const initalList = document.querySelector(".initialTodos");
  initalList.innerHTML = "";
  initalTodos.forEach((item) => addTodo(item));
  deleteTodo();
  completeTodo();
}

function addTodo(item) {
  const initalList = document.querySelector(".initialTodos");
  const todo = document.createElement("li");
  todo.className = "li";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.dataset.id = item.id;
  check.className = "check";
  check.id = "check";
  check.checked = item.complete;

  todo.innerHTML = `
    <label>${item.category} - ${item.todo}</label>
    <button data-id="${item.id}" class="close">X</button>
    `;

  todo.prepend(check);
  initalList.appendChild(todo);
}

//local storage
function saveToStorage() {
  window.localStorage.setItem("todo", JSON.stringify(initalTodos));
}

function getFromStorage() {
  initalTodos = JSON.parse(window.localStorage.getItem("todo"));
}

function main() {
  //display todos
  initTodos();
  initGroceryList();
  initSchoolList();

  //event listener for new todo
  const form = document.querySelector("#form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputValue = document.getElementById("newTodo");
    let t = inputValue.value.trim();

    let categoryValue = document.getElementById("newCategory");
    let n = categoryValue.value.trim();

    if (inputValue.value === " ") {
      alert("Please input a name and category");
    } else if (categoryValue.value === " ") {
      alert("Please input a name and category");
    } else {
      newTodo(t, n);
    }

    inputValue.value = " ";
    inputValue.focus();

    categoryValue.value = " ";
    categoryValue.focus();
  });
}

main();

//grocery todos

//creates grocery todos
function addGroceryTodo(item) {
  let groceriesUl = document.querySelector(".groceryTodos");

  const todo = document.createElement("li");
  todo.className = "li";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.dataset.id = item.id;
  check.className = "check";
  check.id = "check";
  check.checked = item.complete;

  todo.innerHTML = `
    <label>${item.category} - ${item.todo}</label>
    <button data-id="${item.id}" class="close">X</button>
    `;

  todo.prepend(check);
  groceriesUl.appendChild(todo);
}

//initializes grocery todos
function initGroceryList() {
  if (window.localStorage.getItem("todo")) {
    getFromStorage();
  } else {
    saveToStorage();
  }

  const groceryList = document.querySelector(".groceryTodos");
  groceryList.innerHTML = "";
  groceryItems.forEach((item) => addGroceryTodo(item));
  deleteTodo();
  completeTodo();
}

//school todos

//create school todos
function addSchoolTodo(item) {
  let schoolUl = document.querySelector(".schoolTodos");

  const todo = document.createElement("li");
  todo.className = "li";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.dataset.id = item.id;
  check.className = "check";
  check.id = "check";
  check.checked = item.complete;

  todo.innerHTML = `
    <label>${item.category} - ${item.todo}</label>
    <button data-id="${item.id}" class="close">X</button>
    `;

  todo.prepend(check);
  schoolUl.appendChild(todo);
}

//initializes school todos
function initSchoolList() {
  if (window.localStorage.getItem("todo")) {
    getFromStorage();
  } else {
    saveToStorage();
  }

  const schoolList = document.querySelector(".schoolTodos");
  schoolList.innerHTML = "";
  schoolItems.forEach((item) => addSchoolTodo(item));
  deleteTodo();
  completeTodo();
}

//toggle all todos
const allTodos = document.querySelector("#allTodosBtn");
allTodos.addEventListener("click", (event) => {
  let allTodos = document.getElementById("initialTodos");
  let grocery = document.getElementById("groceryTodos");
  let school = document.getElementById("schoolTodos");

  if (allTodos.style.display === "block") {
    allTodos.style.display = "none";
    

  } else {
    allTodos.style.display = "block";
    grocery.style.display = "none";
    school.style.display = "none";
  }
});

//toggle grocery todos
const grocery = document.querySelector("#groceryBtn");
grocery.addEventListener("click", (event) => {
  let grocery = document.getElementById("groceryTodos");
  let school = document.getElementById("schoolTodos");
  let allTodos = document.getElementById("initialTodos");

  if (grocery.style.display === "block") {
    grocery.style.display = "none";
    allTodos.style.display = "none";
  } else {
    grocery.style.display = "block";
    allTodos.style.display = "none";
    school.style.display = "none";
  }
});

//toggle school todos
const school = document.querySelector("#schoolBtn");
school.addEventListener("click", (event) => {
  let school = document.getElementById("schoolTodos");
  let grocery = document.getElementById("groceryTodos");
  let allTodos = document.getElementById("initialTodos");

  if (school.style.display === "block") {
    school.style.display = "none";
  } else {
    school.style.display = "block";
    allTodos.style.display = "none";
    grocery.style.display = "none";
  }
});

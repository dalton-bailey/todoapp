//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
  { id: 1, todo: "buy milk", complete: false, category: "Grocery" },
  { id: 2, todo: "laundry", complete: false, category: "House" },
  { id: 3, todo: "eggs", complete: false, category: "Grocery" },
  { id: 4, todo: "hw", complete: false, category: "School" },
];

console.log(initalTodos);

let todos = document.getElementById("todos")

let allTodos = document.createElement("div")
todos.appendChild(allTodos);

let allTitle = document.createElement("h1")
allTitle.innerHTML = "All Todos"
allTodos.appendChild(allTitle)

let todoList = document.createElement("ul");

allTodos.appendChild(todoList);

//view all todos
initalTodos.map((item) => {
  let todo = document.createElement("li");
  todo.innerHTML = item.todo;
  todoList.appendChild(todo);
});

//filter todos by category
const groceryItems = initalTodos.filter((item) => item.category === "Grocery");
const houseItems = initalTodos.filter((item) => item.category === "House");
const schoolItems = initalTodos.filter((item) => item.category === "School");

console.log(groceryItems);
console.log(schoolItems);
console.log(houseItems);

//view todos by category

//groceries div
let groceries = document.createElement("div");

//groceries title
let groceryTitle = document.createElement("h1");
groceryTitle.innerHTML = "Grocery Todos";
groceries.appendChild(groceryTitle);

let groceriesList = document.createElement("ul");
groceries.appendChild(groceriesList);

//grocery list
let groceriesListItem = groceryItems.forEach((item) => {
  let todo = document.createElement("li");
  todo.innerHTML = item.todo;

  groceriesList.appendChild(todo);
});

//display grocery list
todos.appendChild(groceries);

//house div
let house = document.createElement("div");

//house title
let houseTitle = document.createElement("h1");
houseTitle.innerHTML = "House Todos";
house.appendChild(houseTitle);

//house list
let houseList = houseItems.forEach((item) => {
  let todo = document.createElement("li");
  todo.innerHTML = item.todo;

  house.appendChild(todo);
});

//display house list
todos.appendChild(house);

//school div
let school = document.createElement("div");

//school title
let schoolTitle = document.createElement("h1");
schoolTitle.innerHTML = "School Todos";
school.appendChild(schoolTitle);

//school list
let schoolList = schoolItems.forEach((item) => {
  let todo = document.createElement("li");
  todo.innerHTML = item.todo;

  school.appendChild(todo);
});

//display school list
todos.appendChild(school);

// //create div for add input and button
// let add = document.createElement("div")
// document.body.appendChild(add)

//check box
var myCheck = document.getElementsByTagName("li");
var i;
for (i = 0; i < myCheck.length; i++) {
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  // var txt = document.createTextNode("o")
  check.className = "check";
  // check.appendChild(txt)
  myCheck[i].appendChild(check);
}

//delete list items
var myList = document.getElementsByTagName("li");
var s;
for (s = 0; s < myList.length; s++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myList[s].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// todoList.addEventListener('click', function(check) {
//   if (check.target.className === 'check') {
//     check.target.classList.toggle('checked')
//   }
// })

//new todo
function newTodo() {
  let li = document.createElement("li");
  li.className = "newItem";
  let inputValue = document.getElementById("newTodo").value;
  let t = document.createTextNode(inputValue);

  console.log(t);

  li.appendChild(t);

  if (inputValue === "") {
    alert("Please write a new todo.");
  } else {
    todoList.appendChild(li);
  }

  var newCheck = document.getElementsByClassName("newItem");

  var i;
  for (i = 0; i < newCheck.length; i++) {
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    // var txt = document.createTextNode("o")
    check.className = "check";
    // check.appendChild(txt)
    newCheck[i].appendChild(check);
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  document.getElementById("newTodo").value = " ";
}

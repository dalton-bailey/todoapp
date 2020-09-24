//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
  { id: 1, todo: "Buy milk.", complete: false, category: "Grocery" },
  { id: 2, todo: "Clean the cat box.", complete: false, category: "House" },
  { id: 3, todo: "Chips and salsa.", complete: true, category: "Grocery" },
  { id: 4, todo: "Finish Homework for DGM 3760", complete: false, category: "School" },
];

console.log(initalTodos)

function displayTodos(item) {
  const initalList = document.querySelector(".initialTodos")
  const todo = document.createElement("li")

  todo.innerHTML = 
  `<div>
  <input class="check" type="checkbox">
  <label>${item.todo}</label>
  <button class="close">X</button>
  </div>
  `

  initalList.appendChild(todo)
}


// allTodos.appendChild(todoList);

//view all todos
initalTodos.forEach((item) => displayTodos(item))

//filter todos by category
const groceryItems = initalTodos.filter((item) => item.category === "Grocery");
const houseItems = initalTodos.filter((item) => item.category === "House");
const schoolItems = initalTodos.filter((item) => item.category === "School");

console.log(groceryItems)
console.log(schoolItems)
console.log(houseItems)

//view todos by category

//groceries div
let groceries = document.createElement("div")

//groceries title
let groceryTitle = document.createElement("h1")
groceryTitle.innerHTML = "Grocery Todos"
groceries.appendChild(groceryTitle)

let groceriesList = document.createElement("ul")
groceries.appendChild(groceriesList)

//grocery list
let groceriesListItem = groceryItems.forEach((item) => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo

  groceriesList.appendChild(todo)
});

//display grocery list
todos.appendChild(groceries)

//house div
let house = document.createElement("div")

//house title
let houseTitle = document.createElement("h1")
houseTitle.innerHTML = "House Todos"
house.appendChild(houseTitle)

//house list
let houseList = houseItems.forEach((item) => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo

  house.appendChild(todo)
})

//display house list
todos.appendChild(house)

//school div
let school = document.createElement("div")

//school title
let schoolTitle = document.createElement("h1")
schoolTitle.innerHTML = "School Todos"
school.appendChild(schoolTitle)

//school list
let schoolList = schoolItems.forEach((item) => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo

  school.appendChild(todo)
});

//display school list
todos.appendChild(school)
  
//check box
// let myCheck = document.getElementsByTagName("li");
// let i;
// for (i = 0; i < myCheck.length; i++) {
//   var check = document.createElement("input")
//   check.setAttribute("type", "checkbox")
//   // var txt = document.createTextNode("o")
//   check.className = "check"
//   // check.appendChild(txt)
//   myCheck[i].appendChild(check)
// }


//delete list items
// let close = document.getElementsByClassName("close");
// let t;
// for (t = 0; t < close.length; t++) {
//   close[t].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }


// //check box complete
todoList.addEventListener('click', function(check) {
  if (check.target.className === 'check') {
    console.log('done')
  }
})

//get input value for new todo
const form = document.querySelector('#addTodo')
const check = document.querySelector('.check')

check.addEventListener('click', event => {

})

form.addEventListener('click', event => {
  event.preventDefault()

  let inputValue = document.getElementById("newTodo")
  let t = inputValue.value.trim();

  newTodo(t)

  inputValue.value = " "
  inputValue.focus();
  
})

//push new todo to inital array and call displayTodos to display 
function newTodo(todoContent) {
  const todoText = {
    id: initalTodos.length + 1,
    todo: todoContent,
    complete: false,
    category: 'General'
  }
   
  initalTodos.push(todoText)

  displayTodos(todoText)
}

// //new category {
//   form.addEventListener('click', event => {
//     event.preventDefault()

//     let categoryValue = document.getElementById("newCategory").value
//     let s = document.createTextNode(categoryValue)

//     categoryValue.value = " "
//     // categoryValue.focus();
//   }) 

//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
    {id: 1, todo: "buy milk", complete: false, category: "Grocery"},
    {id: 2, todo: "laundry", complete: false, category: "House"},
    {id: 3, todo: "eggs", complete: false, category: "Grocery"},
    {id: 4, todo: "hw", complete: false, category: "School"}
]

console.log(initalTodos)

let todoList = document.createElement("ul")
todoList.id = "myUL"

document.body.appendChild(todoList)

//view all todos
initalTodos.map(item => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo 
  todoList.appendChild(todo)
})

//filter todos by category
const groceryItems = initalTodos.filter(item => item.category === "Grocery")
const houseItems = initalTodos.filter(item => item.category === "House")
const schoolItems = initalTodos.filter(item => item.category === "School")


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

//grocery list
let groceriesList = groceryItems.forEach(item => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo

  groceries.appendChild(todo)
})

//display grocery list
document.body.appendChild(groceries)

//house div
let house = document.createElement("div")

//house title
let houseTitle = document.createElement("h1")
houseTitle.innerHTML = "House Todos"
house.appendChild(houseTitle)

//house list
let houseList = houseItems.forEach(item => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo

  house.appendChild(todo)
})

//display house list
document.body.appendChild(house)

//school div
let school = document.createElement("div")

//school title
let schoolTitle = document.createElement("h1")
schoolTitle.innerHTML = "School Todos"
school.appendChild(schoolTitle)

//school list
let schoolList = schoolItems.forEach(item => {
  let todo = document.createElement("li")
  todo.innerHTML = item.todo

  school.appendChild(todo)
})

//display school list
document.body.appendChild(school)

//create div for add input and button
let add = document.createElement("div")
document.body.appendChild(add)

//delete list items
var myList = document.getElementsByTagName('li')
var i
for (i = 0; i < myList.length; i++) {
    var span = document.createElement("div")
    var txt = document.createTextNode("x")
    span.className = "close"
    span.appendChild(txt)
    myList[i].appendChild(span)
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newTodo() {
  let li = document.createElement("li")
  let inputValue = document.getElementById("newTodo").value 
  let t = document.createTextNode(inputValue)

  console.log(t)

  li.appendChild(t)

  if (inputValue === '') {
    alert("Please write a new todo.")
  }
  else {
    todoList.appendChild(li)
    // initalTodos.push(inputValue)

  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  document.getElementById("newTodo").value = " "

}





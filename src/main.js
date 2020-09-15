//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
    {id: 1, todo: "Buy milk.", complete: false, category: "Grocery"},
    {id: 1, todo: "Clean the cat box.", complete: false, category: "House"},
    {id: 1, todo: "Chips and salsa.", complete: false, category: "Grocery"},
    {id: 1, todo: "Finish Homework for DGM 3760", complete: false, category: "School"}
]

//new array of arrays
let array = initalTodos.map(obj => Object.values(obj))

console.log(array)

//view all todos
let list = document.createElement("ul")
list.className ="myUL"
let first = document.createElement("li")
first.innerHTML = array[0][1]
list.appendChild(first)

let sec = document.createElement("li")
sec.innerHTML = array[1][1]
list.appendChild(sec)

let third = document.createElement("li")
third.innerHTML = array[2][1]
list.appendChild(third)

let fourth = document.createElement("li")
fourth.innerHTML = array[3][1]
list.appendChild(fourth)

document.body.appendChild(list)


//filter todos by category
const groceryItems = array.filter(item => item[3] === "Grocery")
const houseItems = array.filter(item => item[3] === "House")
const schoolItems = array.filter(item => item[3] === "School")


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
let groceryList = document.createElement("ul")
groceries.appendChild(groceryList)
let groceryElement = groceryItems.forEach(item => {
    let groceryItem = document.createElement("li")
    groceryItem.innerHTML = item[1]
    groceryList.appendChild(groceryItem)
})

//display grocery list
document.body.appendChild(groceries)

//house div
let house = document.createElement("div")

//house title
let houseTitle = document.createElement("h1")
houseTitle.innerHTML = "House Todos"
house.appendChild(houseTitle)

//grocery list
let houseList = document.createElement("ul")
house.appendChild(houseList)
let houseElement = houseItems.forEach(item => {
    let houseItem = document.createElement("li")
    houseItem.innerHTML = item[1]
    houseList.appendChild(houseItem)
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
let schoolList = document.createElement("ul")
school.appendChild(schoolList)
let schoolElement = schoolItems.forEach(item => {
    let schoolItem = document.createElement("li")
    schoolItem.innerHTML = item[1]
    schoolList.appendChild(schoolItem)
})

//display grocery list
document.body.appendChild(school)

//create div for add input and button
let add = document.createElement("div")
document.body.appendChild(add)

//get input to create new todo
let input = document.createElement("input")
input.type = "text"
input.placeholder = "Laundry"
input.id = "newTodo"
input.className = "userInput"
add.appendChild(input);

//add button
let addButton = document.createElement("button")
addButton.className ="add-button"
addButton.innerHTML = "Add"
add.appendChild(addButton)


var myList = document.getElementsByTagName('li')
var i
for (i = 0; i < myList.length; i++) {
    var span = document.createElement("span")
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

// Add a "checked" symbol when clicking on a list item
var newList = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = input.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    input.value = "";
  
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
  }

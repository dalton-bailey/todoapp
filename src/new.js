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

console.log(initalTodos);

//push new todo to inital array and call displayTodos to display
function newTodo(todoContent, todoCategory) {
  const todoText = {
    id: initalTodos.length + 1,
    todo: todoContent,
    complete: false,
    category: todoCategory,
  };

  initalTodos.push(todoText);

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

      initTodos(initalTodos);
    });
  }
}

//checkmark
function completeTodo() {
  const check = document.getElementsByClassName("check");
  for (let t = 0; t < check.length; t++) {
    check[t].addEventListener("change", (event) => {
      const id = event.target.dataset.id;
      const index = initalTodos.findIndex((item) => item.id == id);
      initalTodos[index].complete = !initalTodos[index].complete
      check[t].checked = initalTodos[index].complete;
      console.log(initalTodos)
      initTodos(initalTodos);
    });
  }
}

function initTodos(array) {
  const initalList = document.querySelector(".initialTodos");
  initalList.innerHTML = '';
  array.forEach((item) => addTodo(item));
  deleteTodo();
  completeTodo();
}

function addTodo(item) {
  const initalList = document.querySelector(".initialTodos");
  const todo = document.createElement("li");

  todo.innerHTML = `
    <input data-id="${item.id}" class="check" id="checkBox" type="checkbox">
    <label>${item.category} - ${item.todo}</label>
    <button data-id="${item.id}" class="close">X</button>
    `;

  initalList.appendChild(todo);
}

function main() {
  //display todos
  initTodos(initalTodos);

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

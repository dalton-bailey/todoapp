//Completed Todos
const completedTodosArray = initalTodos.filter(
    (item) => item.complete === true
  );
  //toggle completed todos
  const clearDoneTodos = document.querySelector("#clearDoneBtn");
  clearDoneTodos.addEventListener("click", (event) => {
   
  
    //completed todos
    function addCompletedTodo(item) {
      let completedUl = document.querySelector(".completedTodos");
  
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
      completedUl.appendChild(todo);
    }
  
    function initCompletedTodos() {
      if (window.localStorage.getItem("todo")) {
        getFromStorage();
      } else {
        saveToStorage();
      }
  
      const completedList = document.querySelector(".completedTodos");
      completedList.innerHTML = "";
      completedTodosArray.forEach((item) => addCompletedTodo(item));
      deleteTodo();
      completeTodo();
    }
  
    function mainCompleted() {
      initCompletedTodos();
    }
  
    mainCompleted();
  
  
    let completedTodos = document.getElementById("completedTodos");
  
    if (completedTodos.style.display === "block") {
      completedTodos.style.display = "none";
    } else {
      completedTodos.style.display = "block";
    }
  });
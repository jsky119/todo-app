const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function removeToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function addToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("i");
  button.className += "fas fa-times fa-2x";
  button.addEventListener("click", removeToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit() {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  addToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

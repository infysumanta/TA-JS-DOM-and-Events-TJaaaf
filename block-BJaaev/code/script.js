let inputText = document.querySelector("#text");

let root = document.querySelector("ul");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI();
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI();
}

function createUI() {
  root.innerHTML = "";
  allTodos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.classList.add("flex");
    let div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("data-id", index);
    input.checked = todo.isDone;
    input.addEventListener("input", handleToggle);
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);
    div.append(input, p);
    li.append(div, span);
    root.append(li);
  });
}

function handleInput(event) {
  if (event.keyCode === 13 && event.target.value !== "") {
    let todo = { name: event.target.value, isDone: false };
    allTodos.push(todo);
    event.target.value = "";
    localStorage.setItem("todo", JSON.stringify(allTodos));
    createUI();
  }
}

inputText.addEventListener("keyup", handleInput);

let form = document.querySelector("form");

let ul = document.querySelector("ul");

function handleSubmit(event) {
  event.preventDefault();
  let movie = event.target.elements.moviename.value;
  event.target.elements.moviename.value = "";
  let li = document.createElement("li");
  li.innerText = movie;
  let span = document.createElement("span");
  span.innerText = "X";
  li.append(" ", span);
  ul.append(li);
  span.addEventListener("click", () => {
    span.parentElement.remove();
  });
}

form.addEventListener("submit", handleSubmit);

//Without Event Deligation
let leftOne = document.querySelectorAll(".one");

leftOne.forEach((elm) => {
  elm.addEventListener("click", (event) => {
    if (event.target.classList.contains("one")) {
      event.target.innerText = event.target.dataset.num;
      setTimeout(() => {
        event.target.innerText = "";
      }, 5000);
    }
  });
});

//With Event Deligation
let right = document.querySelector(".right");
right.addEventListener("click", (event) => {
  if (event.target.classList.contains("two")) {
    event.target.innerText = event.target.dataset.num;
    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  }
});

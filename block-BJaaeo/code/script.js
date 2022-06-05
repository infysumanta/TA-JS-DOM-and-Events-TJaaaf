let output = document.querySelector(".result");
let btn = document.querySelectorAll("button");
let initialValue = 0;

output.innerText = initialValue;

function handleBtn(event) {
  if (event.target.classList.contains("equalto")) {
    output.innerText = eval(output.innerText);
    return;
  }
  if (output.innerText === "0") {
    output.innerText = event.target.dataset.text;
  } else {
    output.innerText += event.target.dataset.text;
  }
}

btn.forEach((b) => {
  b.addEventListener("click", handleBtn);
});

let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  output.innerText = initialValue;
});

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

function random_color() {
  var letters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var color = "#";
  for (var i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color += letters[randomNumber];
  }
  return color;
}

let parentBox = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomNum = randomNumber(500);
  h3.innerText = randomNum;
  div.append(h3);
  parentBox.append(div);
}

let allBoxes = document.querySelectorAll(".box");

parentBox.addEventListener("mousemove", handleMouseMove);

function handleMouseMove() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = random_color();
    box.querySelector("h3").innerText = randomNumber(500);
  });
}

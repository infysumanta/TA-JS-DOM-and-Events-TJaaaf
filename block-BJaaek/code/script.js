let one = document.querySelector(".first");
var two = document.querySelector(".second");

one.addEventListener("click", handleClick);
two.addEventListener("mousemove", handleMouseMove);
function get_random_color() {
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

function handleClick() {
  let randomColor = get_random_color();
  one.style.backgroundColor = randomColor;
}
function handleMouseMove() {
  let randomColor = get_random_color();
  two.style.backgroundColor = randomColor;
}

const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const child = document.querySelector(".child");
let childBG = child.style.background;

redBtn.addEventListener("click", redBG);
blueBtn.addEventListener("click", blueBG);
greenBtn.addEventListener("click", greenBG);

function redBG() {
  childBG = "red";
  redBtn.style.backgroundColor = "red";
}
function blueBG() {
  childBG = "blue";
  blueBtn.style.backgroundColor = "blue";
}
function greenBG() {
  childBG = "green";
  greenBtn.style.backgroundColor = "green";
}

console.log(child.style.background);

const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const child = document.querySelector(".child");

redBtn.addEventListener("click", changeColor);
blueBtn.addEventListener("click", changeColor);
greenBtn.addEventListener("click", changeColor);

// function redBG() {
//   childBG = "red";
//   redBtn.style.backgroundColor = "red";
// }
// function blueBG() {
//   childBG = "blue";
//   blueBtn.style.backgroundColor = "blue";
// }
// function greenBG() {
//   childBG = "green";
//   greenBtn.style.backgroundColor = "green";
// }

function changeColor(event) {
  switch (event.target) {
    default:
      child.style.background = "white";
      break;

    case redBtn:
      child.style.background = "red";
      break;

    case blueBtn:
      child.style.background = "blue";
      break;

    case greenBtn:
      child.style.background = "green";
      break;
  }
}

import "./tri-area.css";

var side_one = document.querySelector("#side-1");
var side_two = document.querySelector("#side-2");
var chkArea = document.querySelector("#chk-area");
var output = document.querySelector("#output-id");

chkArea.addEventListener("click", checkArea);

function checkArea() {
  let sideOne = side_one.value;
  let sideTwo = side_two.value;

  if ((sideOne > 0) & (sideTwo > 0)) {
    let area = 0.5 * sideOne * sideTwo;

    output.innerText = `The area of the triangle is ${area} cm2`;
  } else {
    output.innerText = "Please Enter Valid Values";
  }
}

import "./tri-hypo.css";

var length_one = document.querySelector("#length-1");
var length_two = document.querySelector("#length-2");
var chkHypo = document.querySelector("#chk-hypo");
var output = document.querySelector("#output-id");

chkHypo.addEventListener("click", checkHypotenuse);

function checkHypotenuse() {
  let lengthOne = length_one.value;
  let lengthTwo = length_two.value;

  if ((lengthOne > 0) & (lengthTwo > 0)) {
    let sum = Math.pow(lengthOne, 2) + Math.pow(lengthTwo, 2);
    let hypotenuse = Math.sqrt(sum).toFixed(2);
    output.innerText = `The length of the Hypotenuse is ${hypotenuse} cm`;
  } else {
    output.innerText = "Please Enter Valid Values";
  }
}

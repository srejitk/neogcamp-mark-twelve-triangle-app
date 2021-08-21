import "./tri-angle.css";

const angle_one = document.querySelector("#angle-1");
const angle_two = document.querySelector("#angle-2");
const angle_three = document.querySelector("#angle-3");
const chkBtn = document.querySelector("#chk");
const output = document.querySelector("#output-id");

chkBtn.addEventListener("click", checkAngles);

function checkAngles() {
  let angleOne = angle_one.value;
  let angleTwo = angle_two.value;
  let angleThree = angle_three.value;

  if ((angleOne > 0) & (angleTwo > 0) & (angleThree > 0)) {
    let sum = Number(angleOne) + Number(angleTwo) + Number(angleThree);
    if (sum === 180) {
      output.innerText = "Congratulations! It's a Triangle!";
    } else {
      output.innerText = "Ouch! It's not a Triangle!";
    }
  } else {
    output.innerText = "Please Enter Valid Values";
  }
}

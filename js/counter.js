const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const numberOfSeconds = document.querySelector(".number");

startBtn.addEventListener("click", onStartClick);
stopBtn.addEventListener("click", onStopClick);
resetBtn.addEventListener("click", onResetClick);

let a = 0;
let intervalId;

function onStartClick() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      console.log((a += 1));
      numberOfSeconds.textContent = a;
    }, 1000);
  }
  //   startBtn.removeEventListener("click", onStartClick);
}

function onStopClick() {
  clearInterval(intervalId);
  intervalId = undefined;
  //   startBtn.addEventListener("click", onStartClick);
}

function onResetClick() {
  numberOfSeconds.textContent = 0;
  a = 0;
}

const timeElement = document.querySelector(".watch .time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hours * 3600) / 60);
  let sec = seconds % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  timeElement.innerText = `${hours}:${min}:${sec}`;
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  timeElement.innerText = `00:00:00`;
}

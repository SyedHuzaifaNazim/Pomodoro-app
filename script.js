
let min = "00";
let sec = "00";
let minDisplay = document.getElementById('min');
let secDisplay = document.getElementById('sec');
let workMinutes = document.getElementById('work-input');
let interval;
let backgroundColor = document.getElementById('section1');
let inputBox = document.getElementById("work-input");
let invalidChars = ["-", "+", "e"];


inputBox.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

function workTimer() {
  sec++;
  secDisplay.innerHTML = sec;

  if (sec === 60) {
    min++;
    minDisplay.innerHTML = min;
    sec = 0;
  }
  if (min == workMinutes.value) {
    alert("Your working hour is complete. It's break time.");
    clearInterval(interval);
    stopTimer();
    sec = "00";
    min = "00";
    secDisplay.innerHTML = sec;
    minDisplay.innerHTML = min;
    breakStart();
  }
}

function breakTimer() {
  let heading = document.getElementById('heading');
  let breakMinutes = document.getElementById('break-input').value;
  heading.innerHTML = "Break Time";

  backgroundColor.style.backgroundColor = "rgb(33, 235, 77)";
  sec++;
  secDisplay.innerHTML = sec;

  if (sec === 60) {
    min++;
    minDisplay.innerHTML = min;
    sec = 0;
  }
  if (min == breakMinutes) {
    alert("Your break is over. Let's get back to work.");
    stopTimer();
    sec = "00";
    min = "00";
    secDisplay.innerHTML = sec;
    minDisplay.innerHTML = min;
    startTimer();
    backgroundColor.style.backgroundColor = "rgb(255, 55, 55)";
    heading.innerHTML = "Keep working";
  }
}

function startTimer(callback) {
  interval = setInterval(callback, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function start() {
  startTimer(workTimer);
  disableButton();
}

function breakStart() {
  startTimer(breakTimer);
  disableButton();
}

function disableButton() {
  document.getElementById('work-disable-btn').disabled = true;
  document.getElementById('continue-btn').disabled = true;
}

function enableButton() {
  document.getElementById('pause-btn').disabled = false;
  document.getElementById('work-disable-btn').disabled = false;
}



function reset() {
  stopTimer();
  sec = "00";
  min = "00";
  secDisplay.innerHTML = sec;
  minDisplay.innerHTML = min;
  
  // Check if it's currently in break mode, if yes, keep the background color green
  if (document.getElementById('heading').innerHTML === "Break Time") {
    backgroundColor.style.backgroundColor = "rgb(33, 235, 77)";
  } else {
    backgroundColor.style.backgroundColor = ""; // Resetting to default or remove the red color
  }
  
  document.getElementById('heading').innerHTML = "Keep working";
}


// Disable buttons initially
document.getElementById('continue-btn').disabled = true;
document.getElementById('pause-btn').disabled = true;

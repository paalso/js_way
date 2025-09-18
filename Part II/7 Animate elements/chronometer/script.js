// Chronometer
// https://thejsway.net/chapter18/#chronometer

const chronometerButton = document.getElementById("chronometer-button");
const chronometerValueElement = document.getElementById("chronometer-value");
const chronometerResetButton = document.getElementById(
  "chronometer-reset-button"
);

let chronometerValue = 0;
let intervalId = null;

const startChronometer = () => {
  intervalId = setInterval(() => {
    chronometerValue++;
    chronometerValueElement.textContent = chronometerValue;
  }, 1000);
  console.log(`Set interval id: ${intervalId}`);
  chronometerButton.textContent = "Stop";
};

const stopChronometer = () => {
  console.log(intervalId);
  clearInterval(intervalId);
  intervalId = null;
  chronometerButton.textContent = "Start";
};

chronometerButton.addEventListener("click", () => {
  if (intervalId === null) {
    startChronometer();
  } else {
    stopChronometer();
  }
});

chronometerResetButton.addEventListener("click", () => {
  chronometerValue = 0;
  chronometerValueElement.textContent = chronometerValue;
});

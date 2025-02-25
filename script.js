let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

const timeDisplay = document.querySelector(".time-display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.querySelector(".laps");

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        timeDisplay.innerText = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        stopStopwatch();
        startStopBtn.innerText = "Start";
    } else {
        startStopwatch();
        startStopBtn.innerText = "Pause";
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
    stopStopwatch();
    isRunning = false;
    startStopBtn.innerText = "Start";
    seconds = minutes = hours = 0;
    timeDisplay.innerText = "00:00:00";
    lapsList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
    if (isRunning) {
        let lapTime = timeDisplay.innerText;
        let lapItem = document.createElement("li");
        lapItem.innerText = `Lap: ${lapTime}`;
        lapsList.appendChild(lapItem);
    }
});

const display = document.getElementById("display");

let timer = null;
let startTimer = 0;
let elasped = 0;
let isRunning = false;

start = () => {
    if (!isRunning) 
    {
        startTimer = Date.now() - elasped;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

stop = () => {
    if (isRunning)
    {
        clearInterval(timer);
        elasped = Date.now() - startTimer;
        isRunning = false;
    }
}

reset = () => {
    clearInterval(timer);
    startTimer = 0;
    elasped = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

update = () => {
    const current = Date.now();
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let miliseconds = 0;

    elasped = current - startTimer;
    hours = Math.floor(elasped / (1000 * 60 * 60));
    minutes = Math.floor(elasped / (1000 * 60) % 60);
    seconds = Math.floor(elasped / 1000 % 60);
    miliseconds = Math.floor(elasped % 1000 / 10)

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}
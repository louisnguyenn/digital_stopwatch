const display = document.getElementById("display");

let timer = null;
let start = 0;
let elasped = 0;
let isRunning = false;

start = () => {
    if (!isRunning)
    {
        start = Date.now() - elasped;
        timer = setInterval(update, 10);
    }
}

stop = () => {

}

reset = () => {

}

update = () => {
    const current = Date.now();
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let miliseconds = 0;

    elasped = current - start;
    hours = Math.floor(elasped / (1000 * 60 * 60));
    minutes = Math.floor(elasped / (1000 * 60) % 60);
    seconds = Math.floor(elasped / 1000 % 60);
    miliseconds = Math.floor(elasped % 1000 / 10)
    
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}
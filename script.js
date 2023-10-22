let tick = true;
let ticker = () => {
    if (tick) {
        document.write("Тик ");
        tick = false;
    } else {
        document.write("Так ");
        tick = true;
    }
}

let setTime = () => {
    seconds = +prompt("Input a number of seconds");
    return seconds * 1000;
}

let startTimer = (seconds) => {
    let interval = setInterval(ticker, 1000);
    setTimeout(() => clearInterval(interval), seconds);
}
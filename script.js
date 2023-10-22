let tick = true;
let counter = 0;
let d = new Date();
let dif = 0;
function ticker() {
    let d1 = new Date();
    if (dif > 10) {
        clearInterval(interval);
    } else {
        if (tick) {
            document.write("Тик ");
            tick = false;
        } else {
            document.write("Так ");
            tick = true;
        }
        counter++;
        dif = (d1.getTime() - d.getTime()) / 1000;
        console.log(dif);
    }
}
let interval = setInterval(ticker, 1000);
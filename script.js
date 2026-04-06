let display = document.getElementById("display");

function insert(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function sin() {
    display.value = Math.sin(toRad(display.value));
}

function cos() {
    display.value = Math.cos(toRad(display.value));
}

function tan() {
    display.value = Math.tan(toRad(display.value));
}

function log() {
    display.value = Math.log10(display.value);
}

function sqrt() {
    display.value = Math.sqrt(display.value);
}

function power() {
    display.value = Math.pow(display.value, 2);
}

function insertPI() {
    display.value += Math.PI.toFixed(4);
}

function toRad(deg) {
    return deg * (Math.PI / 180);
}
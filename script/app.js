const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "ERROR") {
        display.value = "";
    }

    let currentValue = display.value;
    let lastChar = currentValue.slice(-1);

    const operators = ['+', '-', '*', '/', '.', "%"];

    if (operators.includes(input)) {
        if (operators.includes(lastChar) || currentValue === "") {
            return;
        }
    }

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function toggleSign() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

function calculate() {
    try {
        if (!['+', '-', '*', '/', '.', "%"].includes(display.value.slice(-1))) {
            display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
        }
    } catch (error) {
        display.value = "ERROR";
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
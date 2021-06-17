DEBOUNCING

const debounce = (func, delay) => {
    let timerId;
    return function () {
        clearTimeout(timerId)
        timerId = setTimeout(() => func.apply(this, arguments), delay)
    };
};

function handleButtonClick() {
     callbackFn();
}

function handleConsole() {
    console.count("debounce function executed!!")
}

let callbackFn = debounce(handleConsole, 1000);

let textField = document.querySelector('#search');
textField.addEventListener('input', handleButtonClick);

THROTTLING

const throttle = (func, delay) => {
    let toThrottle = false;
    return function () {
        if (!toThrottle) {
            toThrottle = true;
            func.apply(this, arguments)
            setTimeout(() => {
                toThrottle = false
            }, delay);
        }
    };
};

function handleButtonClick() {
     callbackFn();
}

function handleConsole() {
    console.count("throttle function executed!!")
}

let callbackFn = throttle(handleConsole, 1000);

let textField = document.querySelector('#search');
textField.addEventListener('input', handleButtonClick);
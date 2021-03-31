console.log('async - ⏱')

function someCallback() {
    console.log('Hey there 🙃');
}

// setTimeout(someCallback, 3000);
console.log('runs first ⏰');

// const timeoutId = setTimeout(function () {
//     console.log('Hi 👋');
// }, 3000);

// clearTimeout(timeoutId);
console.log('timeout canceled ❌');
console.clear();

// change that code so that the setTimeout get's stopped if we counted to 5
let counter = 1;
const callbackFunction = function () {
    console.log(counter);
    if (counter < 3) {
        timeoutId = setTimeout(callbackFunction, 1000);
    }

    counter += 1;
    // if (counter > 3) {
    //     // cancel the timeout
    //     clearTimeout(timeoutId);
    // }
}
// callbackFunction();
// let timeoutId = setTimeout(callbackFunction, 1000);

let i = 1;
const intervalId = setInterval(function () {
    console.log(i)
    i++;
    if (i > 10) {
        clearInterval(intervalId)
    }
}, 1000)
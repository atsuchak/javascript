hello(leave);  // callback leave function after hello

function hello(callback) {
    console.log(`Hello`);
    callback();
}

function goodbye() {
    console.log(`Goodbye`);
}

function wait() {
    console.log(`Wait`);
}

function leave() {
    console.log(`Leave`);
}


sum(displayHtml, 5, 21);

function sum(callback, a, b) {
    let result = a+b;
    callback(result);
}

function displayConsole(result) {
    console.log(`Result: ${result}`);
}

function displayHtml(result) {
    document.getElementById("myH1").textContent = `Result: ${result}`;
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});

console.log(`Using arrow function: `);
arr.forEach((val) => {
    console.log(val);
});
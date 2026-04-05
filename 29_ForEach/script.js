let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element) {
    console.log(element);
}

// print square of all element of an array

let arr = [1, 2, 3, 5, 6, 4, 9];

let ans = arr.forEach((val) => {
    console.log(Math.pow(val, 2));
});

// solution using callback
let res = (val) => {
    console.log(Math.pow(val, 2));
};

console.log(`Using callback function: `);
arr.forEach(res);
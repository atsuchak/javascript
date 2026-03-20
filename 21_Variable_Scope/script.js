// Variable scope = where a variable is recognized ans accessible (local vs global)

let x = 7;
let y = 2;  //global variable.. can access from any function

function function1 () {
    let x = 5;  // local variable
    console.log(`function1 X = ${x}`);  // not print global x as the priority of own function is high
    console.log(`global Y = ${y}`);
}

function function2() {
    let x = 30;  // local variable
    console.log(`function2 X = ${x}`);
}

function1();
function2();
let sum = (a, b) => {
    console.log(a + b);
};

let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10));

// if function has a single line of code then no need to use {}
let printHello = () => console.log("Hello World");

// using basic function
function vowelCountUsingFunc(str) {
    let count = 0;
    for(let char of str) 
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
            count++
    
    return count;
};

// using arrow funtion
let vowelCountUsingArrowFunc = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) 
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")
            count++;

    return count;
};
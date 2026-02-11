let students = 28;
console.log(`Initial students: ${students}`);


//Additional operator
students += 4;
console.log(`Students after addition 4: ${students}`);

//Subtraction operator
students -= 2;
console.log(`Students after subtraction 2: ${students}`);

//Multiplication operator
students *= 2;
console.log(`Students after multiplication 2: ${students}`);

//Division operator
students /= 2;
console.log(`Students after division 2: ${students}`);

//Exponential operator
students **= 2;
console.log(`Students after exponential 2: ${students}`);

//Reminder operator
students %= 7;
console.log(`Students after modulo 7: ${students}`);


/*
    Operator precedence
    1. parenthesis()
    2. exponents
    3. multiplication && division && modulo
    4. add && sub
*/

let result = 6 / 2 ** (2 + 5);
console.log(`Result: ${result}`);
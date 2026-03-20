function add(num1, num2) {
    let sum = num1+num2;
    return sum;
}

function sub(num1, num2) {
    return num1-num2;
}

function checkEvOd(num) {
    return num%2 == 0;
}

function checkValidEmail(email) {
    return email.includes("@");
}

let ans = add(4, 5);
console.log(`Answer(add): ${ans}`);

console.log(`Answer(sub): ${sub(98, 23)}`);

checkEvOd(32)? console.log(`Number is even`) : console.log(`Number is odd`);

console.log(checkValidEmail("Ahnaf#gmail.com"));
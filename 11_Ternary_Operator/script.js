let age = 10;
age < 18? console.log(`User is below 18`) : console.log(`User is above 18`);

let purchaseAmount = 192; 
let discount = purchaseAmount >= 100? 10 : 0
console.log(`Purchase amount: ${purchaseAmount-purchaseAmount*(discount/100)}`);

const button = document.getElementById("myButton");
const label = document.getElementById("myLabel");
const output = document.getElementById("myOutput");

button.onclick = function() {
    let userAge = label.value;
    userAge = Number(userAge);
     
    userAge < 18? output.textContent = `User is below 18` : output.textContent = `User is above 18`;
}
const input = document.getElementById("tempInput");
const toFar = document.getElementById("celToFar");
const toCel = document.getElementById("farToCel");
const button = document.getElementById("submit");
let answer = document.getElementById("output");

button.onclick = function() {
    let value = Number(input.value);

    if(input.value === "") {
        answer.textContent = `First enter a number inside the box`;
    }else if(toFar.checked) {
        let ans = (value*9/5) + 32;
        answer.textContent = `${ans.toFixed(2)} degree fahrenhait`;
    }else if(toCel.checked) {
        let ans = (value-32)*5/9;
        answer.textContent = `${ans.toFixed(2)} degree celcius`;
    }else {
        answer.textContent = `Choose a option first`;
    }
}
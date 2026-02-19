const btn = document.getElementById("button");
const num = document.getElementById("number");

btn.onclick = function() {
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;

    max = Number(max);
    min = Number(min);

    let digit = Math.floor(Math.random() * (max-min+1)) + min;

    num.textContent = digit;
    console.log(digit);
}

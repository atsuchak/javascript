// 1. add a heading from html file and then add another word using js file
let button = document.querySelector("button");

button.onclick = function() {
    let heading = document.querySelector("h1");
    heading.innerText = heading.innerText + " From Universe";
}

// 2. create 3 div with same class and change those values from js file

let divButton = document.querySelector("#changeDiv");

divButton.onclick = function() {
    let div = document.querySelectorAll(".commonClass");

    div[0].innerText = "New Value 1";
    div[1].innerText = "New Value 2";
    div[2].innerText = "New Value 3";
}
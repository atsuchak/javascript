// create a button element with text "Click me", add text color white and background color red using script file

let newButton = document.createElement("button");
newButton.innerHTML = "Click me!";

newButton.style.color = "white";
newButton.style.backgroundColor = "red";

document.querySelector("body").prepend(newButton);


// create a paragraph tag and add a new element with the previous one using js

let para = document.querySelector("p");
para.classList.add("newParagraph");
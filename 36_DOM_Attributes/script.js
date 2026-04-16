let div = document.querySelector("div");
console.log(div);

let id = heading.getAttribute("id");
console.log(id);

let p = document.querySelector("p");
console.log(p.getAttribute("class"));  //get class name

console.log(p.setAttribute("class", "Hello"));  //set new class name

p.style.fontSize = "2rem";
div.style.backgroundColor = "lightGreen";
div.style.fontWeight = "bold";

let button = document.querySelector("#button");
button.onclick = function() {
    p.style.visibility = "hidden";
}


// add element
let listButton = document.createElement("button");
listButton.innerText = "Hello World";
console.log(listButton);

let listDiv = document.querySelector("#list");
listDiv.style.backgroundColor = "red"
listDiv.style.height = "100px";
listDiv.style.width = "300px";
listDiv.style.margin = "10px";

listDiv.append(listButton);  //end of the div
// listDiv.prepend(listButton);  //top of the div
// listDiv.before(listButton);  //outer top of the div
// listDiv.after(listButton);  //outer bottom of the div

let newHeading = document.createElement("h1");
newHeading.innerText = "New heading";

heading.append(newHeading);

// remove element
newHeading.remove();
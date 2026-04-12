// tag property
let heading = document.querySelector(".heading");
console.log(heading.tagName);  // return tag name(H1)

let paragraph = document.querySelector(".myParagraph");
console.log(paragraph.tagName);  // return P


// innerText
let inner_Text = document.querySelector("#allParagraph");
console.log(inner_Text.innerText);  // shows only text


// innerHtml
let paragraphDiv = document.querySelector("#allParagraph");
console.log(paragraphDiv.innerHTML);  // shows the html code


// innerText set
let setInnerText = document.querySelector(".myParagraph");
setInnerText.innerText = "Hello world";  // only set text


// innerHTML set
let setInnerHTML = document.querySelector("#allParagraph");
setInnerHTML.innerHTML = "<div><h2>Inner HTML changed </h2></div>";  // can use tags


// textContent
let inner_content = document.querySelector("#hiddenContent");
console.log(inner_content.innerText);  // doesn't show anything as the visibility is hidden
console.log(inner_content.textContent);  // show the content with textContent tag
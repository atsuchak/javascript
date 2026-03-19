//without chaining
let username = window.prompt("Enter your username");
username = username.trim();

let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();

username = firstLetter + extraChar;
console.log(username);
window.alert(username);



//with chaining
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
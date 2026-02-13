let username;

//Using windows promt
username = window.prompt("Enter your username: ");
document.writeln(`Your username: ${username}\n`);
console.log(username);


//Using html textbox
document.getElementById("submit").onclick = function() {
    username = document.getElementById("userInput").value;
    document.getElementById("intro").textContent = `Hello ${username}`;
    console.log(username);
}

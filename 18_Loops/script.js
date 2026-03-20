let loggedIn = false;
let username = "";
let pass = "";

let i = 1;
while(!loggedIn) {
    username = window.prompt(`Enter your username: `);
    pass = window.prompt(`Enter your password: `);

    if(username === "murgi" && pass === "123") loggedIn = true;
    else window.alert(`Invalid username or pass, try again`);
    
    console.log(`Try ${i}:\nUsername: ${username}\tPassword: ${pass}`)
    i++;
}

console.log(`Final answer:\nUsername: ${username}\tPassword: ${pass}`);
window.alert(`Welcome to the site Mr. Murgi`);
function submitButton() {
    const passLength = Number(document.getElementById("passLength").value);
    const lowerCase = document.getElementById("addLowerCase");
    const upperCase = document.getElementById("addUpperCase");
    const number = document.getElementById("addNumber");
    const symbol = document.getElementById("addSymbol");
    const output = document.getElementById("output");

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "01234567890123678901234567";
    const symbolchars = "!@#$%^&*()_+=:!@#$%^&*()_+=:";

    let allowChar = "";
    let password = "";

    lowerCase.checked? allowChar += lowerChars : "";
    upperCase.checked? allowChar += upperChars : "";
    number.checked? allowChar += numberChars : "";
    symbol.checked? allowChar += symbolchars : "";

    for(let i = 0; i < passLength; i++) {
        const randomIdx = Math.floor(Math.random() * allowChar.length);
        password += allowChar[randomIdx];
    }

    if(allowChar === "") output.textContent = `Choose atleast 1 option`;
    else output.textContent = `Password: ${password}`;
}
function rollButton() {
    const diceInput = document.getElementById("diceInput").value;
    let values = [];
    let images = [];

    let sum = 0;
    for(let i = 1; i <= diceInput; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="./assets/${value}.png" alt = "Dice ${value}">`);
        sum += value;
    }

    let diceResult = document.getElementById("diceResult");
    let imageResult = document.getElementById("imgResult");
    let sumResutl = document.getElementById("sumResult");

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    imageResult.innerHTML = images.join('');
    sumResutl.textContent = `Sum of total dice: ${sum}`;
}
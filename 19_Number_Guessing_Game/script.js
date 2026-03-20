const minLabel = document.getElementById("minNumber");
const maxLabel = document.getElementById("maxNumber");
const guessLabel = document.getElementById("guessNumber");
const submitButton = document.getElementById("submit");
const checkButton = document.getElementById("check");
const outputLabel = document.getElementById("output");



submitButton.onclick = function() {
    let min = Number(minLabel.value);
    let max = Number(maxLabel.value);
    const answer = Math.floor(Math.random() * (max - min + 1)) + min;

    if(minLabel.value === "" || maxLabel.value === "") outputLabel.textContent = `Enter min or max value first`;
    else if(isNaN(min) || isNaN(max)) outputLabel.textContent = `Enter a valid number`;
    else {
        let attempt = 0;
        outputLabel.textContent = `max, min added. Now guess the number`;
        checkButton.onclick = function() {
            let guess = Number(guessLabel.value);
            if(guessLabel.value === "") outputLabel.textContent = `Enter a number first`;
            else if(isNaN(guess)) outputLabel.textContent = `Enter a valid number`;
            else {
                if(guess > answer) outputLabel.textContent = `Too high! Guess low`;
                else if(guess < answer) outputLabel.textContent = `Too low! Guess high`;
                else outputLabel.textContent = `Correct! you need ${attempt} attempt`;
                attempt++;
            }
            console.log(`attempt ${attempt}: ${guess}`);
        }

    }
}
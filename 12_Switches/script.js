const day = document.getElementById("myText");
const output = document.getElementById("myOutput");

const button = document.getElementById("myButton");

button.onclick = function() {
    let val = day.value;
    val = Number(val);

    switch(val) {
        case 1:
            console.log(`It's Saturday`);
            output.textContent = `It's Saturday`
            break;
        case 2:
            console.log(`It's Sunday`);
            output.textContent = `It's Sunday`
            break;
        case 3:
            console.log(`It's Monday`);
            output.textContent = `It's Monday`
            break;
        case 4:
            console.log(`It's Tuesday`);
            output.textContent = `It's Tuesday`
            break;
        case 5:
            console.log(`It's Wednesday`);
            output.textContent = `It's Wednesday`
            break;
        case 6:
            console.log(`It's Thusday`);
            output.textContent = `It's Thusday`
            break;
        case 7:
            console.log(`It's Friday`);
            output.textContent = `It's Friday`
            break;
        default:
            console.log(`No day exists`);
            output.textContent = `No day exists`
            break;
    }
}
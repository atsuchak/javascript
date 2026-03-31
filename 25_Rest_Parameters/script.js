//rest = bundle separated element into an array

let fruit1 = "apple";
let fruit2 = "graph";
let fruit3 = "cherry";
let fruit4 = "banana";

function testFunction(...fruits) {  //accept any size of parameter
    console.log(fruits);  //print separately

    console.log(...fruits);  //prints together
}
testFunction(fruit1, fruit2, fruit3, fruit4);

//add separate strings
function getFood(...foods) {
    return foods;
}
let foods = getFood(fruit1, fruit2, fruit3, fruit4);
console.log(foods);


//add numbers
function add(...numbers) {
    let result = 0;
    for(let it of numbers) {
        result += it;
    }
    return result;
}

let ans = add(3, 1, 2);
console.log(`Sum of the number: ${ans}`);


//combine strings
function combineStrings(...string) {
    return string.join(" ");
}

let st = combineStrings("Ahnaf", "Tajwar", "Suchak");
console.log(st);
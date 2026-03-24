let number = [1, 2, 3, 4, 5];

let maxNum = Math.max(...number);
console.log(`Maximum number: ${maxNum}`);

let minNum = Math.min(...number);  //unpacked the element of an array or string
console.log(`Minimum number: ${minNum}`);

let name = "Ahnaf Tajwar Suchak";
let char = [...name];
console.log(`All char: ${char}`);

let fruits = ["mango", "apple", "banana", "potato"];
let vagetable = ["capcicum", "tomato", "carrots"];
let newFruits = [...fruits, ...vagetable, "eggs", "milk"];

console.log(newFruits);
let fruits = ["apple", "banana", "jackfruit", "papaya"];

// print all element from the array
console.log(`All elements: ${fruits}`);

// print specific index's element from the array
console.log(`1st index fruit: ${fruits[1]}`);  //1st index
console.log(`2nd index fruit: ${fruits[2]}`);  //2nd index

// modify array
console.log(`3rd index(before): ${fruits[3]}`);
fruits[3] = "orange";
console.log(`3rd index(after): ${fruits[3]}`);

// add element at last index
fruits.push("coconut");
console.log(`Push fruits: ${fruits}`);  //push element to the last index

// remove element from last index
fruits.pop();
console.log(`Pop fruits: ${fruits}`);  //remove element from the last index

// add element it 0th index
fruits.unshift("mango");
console.log(`unshift: ${fruits}`);  //add element to the 0th index

// remove element from 0th element
fruits.shift();
console.log(`shift: ${fruits}`);  //delete element from the 0th index

// array length
console.log(`Size of array: ${fruits.length}`);

//return the index of a specific element
console.log(`Index of banana: ${fruits.indexOf("banana")}`);  

fruits.sort();  //sort array in an ascending order
fruits.sort().reverse();  //reverse sort array in an ascending order

console.log(`Before Slice: ${fruits}`);
let newFruits = fruits.slice(0, 2);  // make a copy of changed array
console.log(`After Slice: ${newFruits}`);

// splice: remove element from a specific index to a specific number of index
console.log(`Before splice: ${fruits}`);
fruits.splice(1, 2);  // change the main array
console.log(`After splice: ${fruits}`);

console.log(`Range based for loop`);
for(let it of fruits) console.log(it);

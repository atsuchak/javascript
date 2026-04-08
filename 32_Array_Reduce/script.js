let arr = [1, 2, 31, 4, 5];

// sum of all element
let sum = arr.reduce((res, val) => {
    return res + val;
});
console.log(`sum of all elements: ${sum}`);

// return greatest
let largest = arr.reduce((prev, curr) => {
    return prev > curr? prev : curr;
})
console.log(largest);


// take a integer from user and print all the element then use reduce method to calculate the sum and products of all the element from the array

let n = prompt(`Enter a number: `);

let num = [];
for(let i = 1; i <= n; i++) num[i-1] = i;

console.log(num);

let totalSum = num.reduce((prev, curr) => {
    return prev + curr;
});
let totalProduct = num.reduce((prev, curr) => {
    return prev * curr;
});
console.log(`Total sum: ${totalSum}`);
console.log(`Total product: ${totalProduct}`);
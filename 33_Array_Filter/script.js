let arr = [1, 2, 34, 4, 3, 21];

// push a value to a new array 
let filterFunc = arr.filter((val) => {
    if(val > 10) return true;
});
console.log(filterFunc);



// Filter the value which greater than 90
let marks = [43, 98, 23, 76, 87, 99, 90, 13, 91];

let ans = marks.filter((val) => {
    return val > 90;
});
console.log(`Marks greater than 90: ${ans}`);
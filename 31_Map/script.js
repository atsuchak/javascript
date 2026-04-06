let arr = [11, 2, 4, 21, 5];


// foreach loop
arr.forEach(function(val) {
    console.log(val);
});

// map: return a value for each element of a array
let newArr = arr.map(function(val) {
    return 12;
});
console.log(newArr);

let lessThanTen = arr.map(function(val) {
    if(val < 10) return val;
});
console.log(lessThanTen);

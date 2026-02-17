let x = 3.21;
let y = 2;
let z = Math.pow(Math.floor(3), y);
let a = -34.32;

console.log(`X = ${x}, Y = ${y}, Z = ${z}, A = ${a}`);
console.log(`Round x: ${Math.round(x)}`);
console.log(`Ceil x: ${Math.ceil(x)}`);
console.log(`Floor x: ${Math.floor(x)}`);
console.log(`Sqrt z: ${Math.sqrt(z)}`);
console.log(`Power ${z}^${y}: ${Math.pow(z, y)}`);
console.log(`log z: ${Math.log(z)}`);
console.log(`Sin x: ${Math.sin(Math.floor(x))}`);
console.log(`Cos x: ${Math.cos(Math.floor(x))}`);
console.log(`Tan x: ${Math.tan(Math.floor(x))}`);
console.log(`Absolute a: ${Math.abs(a)}`);
console.log(`Sign a: ${Math.sign(a)}`);

console.log(`Max val: ${Math.max(x, y, z, a)}`);
console.log(`Min val: ${Math.min(x, y, z, a)}`);
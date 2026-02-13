//define as string
let x = "Hello";
let y = "Hello";
let z = "Hello";
console.log(`Before convert(x, y, z): ${x}, ${y}, ${z}`);
console.log(`Type of(x, y, z): ` + typeof x, typeof y, typeof z + `\n`);

x = Number(x);
y = String(y);
z = Boolean(z);
console.log(`After convert(x, y, z): ${x}, ${y}, ${z}`);
console.log(`Type of(x, y, z): ` + typeof x, typeof y, typeof z + `\n`);


//define as number
let a = 10;
let b = 20;
let c = 30;
console.log(`Before convert(a, b, c): ${a}, ${b}, ${c}`);
console.log(`Type of(a, b, c): ` + typeof a, typeof b, typeof c + `\n`);

a = Number(a);
b = String(b);
c = Boolean(c);
console.log(`After convert(a, b, c): ${a}, ${b}, ${c}`);
console.log(`Type of(a, b, c): ` + typeof a, typeof b, typeof c + `\n`);


//define as empty 
let p = "";
let q = "";
let r = "";
console.log(`Before convert(p, q, r): ${p}, ${q}, ${r}`);
console.log(`Type of(x, y, z): ` + typeof p, typeof q, typeof r + `\n`);

p = Number(p);
q = String(q);
r = Boolean(r);
console.log(`After convert(p, q, r): ${p}, ${q}, ${r}`);
console.log(`Type of(x, y, z): ` + typeof p, typeof q, typeof r + `\n`);


//undefine
let k; 
let l; 
let m; 
console.log(`Before convert(k, l, m): ${k}, ${l}, ${m}`);
console.log(`Type of(k, l, m): ` + typeof k, typeof l, typeof m + `\n`);

k = Number(k);
l = String(l);
m = Boolean(m);
console.log(`After convert(k, l, m): ${k}, ${l}, ${m}`);
console.log(`Type of(k, l, m): ` + typeof k, typeof l, typeof m + `\n`);
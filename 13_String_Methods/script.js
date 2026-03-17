let username = " SuchakAhnaf";

console.log(`Charecter index[3] = ${username.charAt(3)}`);  //return charecter at index 3

console.log(`Index of 'a' = ${username.indexOf("a")}`);  //return index of charecter a
console.log(`Index of last 'a' = ${username.lastIndexOf("a")}`);  //return index of last charecter a

console.log(`String lenght = ${username.length}`);  //return length of the string

console.log(`Before Trim = ${username}`);
console.log(`After Trim = ${username.trim()}`);

console.log(`ToUpper = ${username.toUpperCase()}`);
console.log(`ToLower = ${username.toLowerCase()}`);

console.log(`Repeat string 3 times = ${username.repeat(3)}`);

//check a string start with a charecter or not
(username.startsWith("b"))? console.log(`Starts with b`) : console.log(`Not starts with b`);

//check a string ends with a charecter or not
(username.endsWith("f"))? console.log(`Ends with f`) : console.log(`Not ends with f`);

//check a string includes a charecter or not
(username.includes("k"))? console.log(`string includes k`) : console.log(`string not includes k`);

//replace
console.log(`Replace string = ${username.replaceAll("Ahnaf", "Sakin")}`);

//increase string size with desire charecter in start
console.log(`Pad start = ${username.padStart(15, "Q")}`);

//increase string size with desire charecter in end
console.log(`Pad end = ${username.padEnd(15, "Z")}`);
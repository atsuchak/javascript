let fullName = `Ahnaf Tajwar Suchak`;

//string slice(start index, end index)
let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(13, 19);

//more appropiate way
firstName = fullName.slice(0, fullName.indexOf(" "));
let middleName = fullName.slice(fullName.indexOf(" ")+1, fullName.lastIndexOf(" "));

console.log(`Full name: ${fullName}`);
console.log(`First name: ${firstName}`);
console.log(`Middle name: ${middleName}`);
console.log(`Last name: ${lastName}`);


let email = "suchak@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let mailName = email.slice(email.indexOf("@")+1, email.indexOf("."));
let extension = email.slice(email.indexOf("@")+1);

console.log(`Username: ${username}`);
console.log(`Mail name: ${mailName}`);
console.log(`Extension name: ${extension}`);
//    =     assignment operator
//   ==     comparison operator(between values)
//  ===     strict equality (check value and datatype both)
//   !=     inequality operator
//  !==     strictly inequality operator

const PI = 3.14

if(PI == "3.14") console.log(`Equal`);  //compare number with string still give equal as the == only compare value
else console.log(`Not equal`);

const value = 40.42

if(value === "40.42") console.log(`Equal`);  //give Not equal as now it is also compare the datatype too where the number and stirng datatype not mathched
else console.log(`Not equal`);
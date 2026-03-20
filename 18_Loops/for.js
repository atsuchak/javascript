for(let i = 0; i < 10; i++) console.log(`${i+1}. Hello world`);

console.log(`\n`);
for(let i = 1; i <= 20; i++) {
    if(i == 13) continue;
    if(i == 17) break;
    console.log(`${i}`);
}
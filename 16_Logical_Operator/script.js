let weather = -45;

if(weather >= 25 && weather <= 30) console.log(`The weather is good`);
else if((weather > 30 && weather <50) || (weather > 0 && weather < 25)) console.log(`The weather is bad`);
else if(weather < 0 || weather > 100) console.log(`Impossible weather`);
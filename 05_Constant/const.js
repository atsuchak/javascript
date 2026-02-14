//const = a value which doesn't changed

const double = 2
let height, width, area;

// radius = window.prompt("Enter radius: ");
// radius = Number(radius);

// area = PI*radius*radius;
// document.writeln(`Area of the circle: ${area}`);
// console.log(area);


document.getElementById("submit").onclick = function() {
    height = document.getElementById("length").value;
    width = document.getElementById("width").value;

    height = Number(height);
    width = Number(width);

    area = height*width;
    document.getElementById("heading").textContent = `Area of a rectangle = ${area}`;
    area = height*width*double;
    document.getElementById("heading2").textContent = `Area of a rectangle*2 = ${area}`;
    
    console.log(`Rentangle area*2: ${area}`);
}

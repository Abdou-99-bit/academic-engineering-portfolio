


function calculate() {

    let a = parseFloat(prompt("Enter value for a:"));
    let b = parseFloat(prompt("Enter value for b:"));
    let c = parseFloat(prompt("Enter value for c:"));
    let d = parseFloat(prompt("Enter value for d:"));

    let result1 = (a + b) * c / d;
    let result2 = a * b - c + d;
    let result3 = (a / c) * (b / d) - ((a * b - c) / (c * d));

    
    alert(`Formula 1: (a + b) * c / d = ${result1}`);
    alert(`Formula 2: a * b - c + d = ${result2}`);
    alert(`Formula 3: (a/c) * (b/d) - ((a * b - c) / (c * d)) = ${result3}`);
}

calculate();




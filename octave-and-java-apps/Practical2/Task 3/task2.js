function sideLength(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
  }

  function triangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  function trianglePerimeter(a, b, c) {
    return a + b + c;
  }
  

  function calculateTriangle() {

    const x1 = Number(prompt("Enter x1 (point A):"));
    const y1 = Number(prompt("Enter y1 (point A):"));
    const x2 = Number(prompt("Enter x2 (point B):"));
    const y2 = Number(prompt("Enter y2 (point B):"));
    const x3 = Number(prompt("Enter x3 (point C):"));
    const y3 = Number(prompt("Enter y3 (point C):"));

  
    if ([x1, y1, x2, y2, x3, y3].some(isNaN)) {
      document.getElementById("output").innerHTML = "Please enter valid numeric coordinates.";
      return;
    }
  
    const sideAB = sideLength(x1, y1, x2, y2);
    const sideBC = sideLength(x2, y2, x3, y3);
    const sideCA = sideLength(x3, y3, x1, y1);
  
    const perimeter = trianglePerimeter(sideAB, sideBC, sideCA);
    const area = triangleArea(sideAB, sideBC, sideCA);
  }  

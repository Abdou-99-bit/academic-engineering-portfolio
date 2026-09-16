function findSmallest() {

    let a = parseFloat(prompt("Enter value for a:"));
    let b = parseFloat(prompt("Enter value for b:"));
    let c = parseFloat(prompt("Enter value for c:"));

    let smallest = a;
  
    if (b < smallest) {
      smallest = b;
    }
    if (c < smallest) {
      smallest = c;
    }
}




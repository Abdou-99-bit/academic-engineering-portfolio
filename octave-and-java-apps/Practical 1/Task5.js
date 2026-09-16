function hexadecimalToDecimal(hexadecimal) {
    // Convert the hexadecimal string to a decimal number
    return parseInt(hexadecimal, 16);
  }

  // Ask the user for a hexadecimal number
  let hexadecimalNumber = prompt("Enter a hexadecimal number:");

  // Check if the entered hexadecimal number is valid (only contains valid hexadecimal characters)
  if (/^[0-9A-Fa-f]+$/.test(hexadecimalNumber)) {
    let decimalNumber = hexadecimalToDecimal(hexadecimalNumber);  // Convert to decimal
    alert(`The decimal equivalent of hexadecimal ${hexadecimalNumber} is ${decimalNumber}.`);
  } else {
    alert("Please enter a valid hexadecimal number (only 0-9 and A-F).");
  }
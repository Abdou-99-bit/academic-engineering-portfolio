function binaryToDecimal(binary) {
    // Convert the binary string to a decimal number
    return parseInt(binary, 2);
  }

  // Ask the user for a binary number
  let binaryNumber = prompt("Enter a binary number:");

  // Check if the entered binary number is valid (only contains 0s and 1s)
  if (/^[01]+$/.test(binaryNumber)) {
    let decimalNumber = binaryToDecimal(binaryNumber);  // Convert to decimal
    alert(`The decimal equivalent of binary ${binaryNumber} is ${decimalNumber}.`);
  } else {
    alert("Please enter a valid binary number (only 0s and 1s).");
  }
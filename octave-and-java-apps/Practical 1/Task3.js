function sumOfDigits(number) {
    let sum = 0;
    // Loop through each digit of the number
    while (number > 0) {
      sum += number % 10;  // Get the last digit and add to sum
      number = Math.floor(number / 10);  // Remove the last digit
    }
    return sum;
  }

  // Ask user for a three-digit number
  let number = parseInt(prompt("Enter a three-digit number:"));

  // Check if the number is valid (three-digit)
  if (number >= 100 && number <= 999) {
    let sum = sumOfDigits(number);  // Calculate the sum of digits
    alert(`The sum of the digits of ${number} is ${sum}.`);  // Show the result
  } else {
    alert("Please enter a valid three-digit number between 100 and 999.");
  }
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Ask user for a number between 1 and 10
  let number = parseInt(prompt("Enter a number between 1 and 10:"));

  // Check if the number is valid (between 1 and 10)
  if (number > 0 && number <= 10) {
    let fact = factorial(number);  // Calculate the factorial
    alert(`The factorial of ${number} is ${fact}`);  // Show the result
  } else {
    alert("Please enter a valid number between 1 and 10.");
  }
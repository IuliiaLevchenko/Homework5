// Function for counting the sum of numbers from 1 to 100 that are not multiples of three
function sumNumbers() {
  let sum = 0;
  for (let number = 1; number <= 100; number++) {
    if (number % 3 !== 0) {
      sum += number;
    }
  }
  // Display the sum in the output div
  document.getElementById("output").innerHTML = sum;
}

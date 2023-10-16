function getMonthConverter() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return function(monthNumber) {
    // Check if the input is a valid number
    if (typeof monthNumber !== 'number' || isNaN(monthNumber)) {
      return "Bad Number";
    }

    // Strip the decimal portion if it exists
    monthNumber = Math.floor(monthNumber);

    // Check if the month number is within the valid range
    if (monthNumber < 1 || monthNumber > 12) {
      return "Bad Number";
    }

    // Convert the month number to the corresponding month name
    return monthNames[monthNumber - 1];
  };
}

// Usage
const convertMonth = getMonthConverter();

console.log(convertMonth(1));    // Output: January
console.log(convertMonth(5));    // Output: May
console.log(convertMonth(12));   // Output: December
console.log(convertMonth(15));   // Output: Bad Number
console.log(convertMonth("abc"));   // Output: Bad Number
console.log(convertMonth(7.8));   // Output: July
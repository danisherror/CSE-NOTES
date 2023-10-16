//q1
function translate(text) {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  let translatedText = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (consonants.includes(char)) {
      translatedText += char + 'o' + char;
    } else {
      translatedText += char;
    }
  }

  return translatedText;
}
//********************************************
const originalText = "this is fun";
const translatedText = translate(originalText);
console.log(translatedText);


//--------------------------------------------------------------------------------------------------------------------
//q2
// Write a java script program to convert   month number to month name using closures.
// •	If the user enters a number less than 1 or greater than 12 or a non-number, have the function write "Bad Number" in the monthName field.
// •	If the user enters a decimal between 1 and 12 (inclusive), strip the decimal portion of the number.

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

//---------------------------------------------------------------------------------------------------------
//q3
// Write a javascript closure to calculate net price of a product along with tax.
// (a)	Write a javascript closure to calculate net price of a product along with tax.

function calculateNetPrice(taxRate) {
  return function(price) {
    // Check if the input is a valid number
    if (typeof price !== 'number' || isNaN(price)) {
      return "Invalid price";
    }

    // Calculate the tax amount
    const taxAmount = price * (taxRate / 100);

    // Calculate the net price (price + tax)
    const netPrice = price + taxAmount;

    return netPrice;
  };
}

// Usage
const calculateNetPriceWithTax = calculateNetPrice(10); // Assuming tax rate of 10%

console.log(calculateNetPriceWithTax(100));   // Output: 110
console.log(calculateNetPriceWithTax(50));    // Output: 55
console.log(calculateNetPriceWithTax(75.5));  // Output: 83.05
console.log(calculateNetPriceWithTax("abc")); // Output: Invalid price


//--------------------------------------------------------------------------------------------------
//(a)	Write an REACT program to print Name, Address and Company of an Employee.
// When you Click on CHANGE button, the name and address should be changed.

import React, { useState } from 'react';

function EmployeeDetails() {
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState('123 Main Street');
  const company = 'ABC Company';

  const changeDetails = () => {
    setName('Jane Smith');
    setAddress('456 Elm Street');
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <button onClick={changeDetails}>CHANGE</button>
    </div>
  );
}

export default EmployeeDetails;

//**************************************************************
import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function App() {
  return (
    <div>
      <EmployeeDetails />
    </div>
  );
}

export default App;


//----------------------------------------------------------------------------------
//(a)	Write a java script function named pluralize that:
//•	takes 2 arguments, a noun and a number.
//•	returns the number and pluralized form, like "5 cats" or "1 dog".
//•	Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
    if (number === 1) {
      return `${number} ${noun}`;
    } else {
      // Handle special cases for collective nouns
      if (noun === 'sheep' || noun === 'geese') {
        return `${number} ${noun}`;
      }
      
      // Regular pluralization
      const pluralizedNoun = noun + 's';
      return `${number} ${pluralizedNoun}`;
    }
  }
  console.log(pluralize('cat', 5));     // Output: 5 cats
  console.log(pluralize('dog', 1));     // Output: 1 dog
  console.log(pluralize('sheep', 3));   // Output: 3 sheep
  console.log(pluralize('goose', 2));   // Output: 2 geese
  console.log(pluralize('bird', 0));    // Output: 0 birds

//------------------------------------------------------------------------------------------------------

//(a)	Write an REACT program which accepts the Name from the form. 
//As you type, it updates the Name in the page with an h1 tag.

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <form>
        <input type="text" value={name} onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default App;
//******************************************************************************** *
import React from 'react';
import App from './App';

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Main;

//----------------------------------------------------------------------------------------
//Design a Student Form using HTML5 which has following fields
//a)	Name        : Required must be characters
//b)	Email       : Validation placeholder: please enter valid email address
//c)	Phone       : accept numbers in the following format (080-555-5555)
//d)	Semester  : For the range 1 to 8
//e)	Branch     :Data list 
//f)	Website    :Required pattern of the form-http://

/*
<!DOCTYPE html>
<html>
<head>
  <title>Student Form</title>
</head>
<body>
  <h2>Student Form</h2>
  <form>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" pattern="[A-Za-z ]+" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Please enter a valid email address" required>
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" pattern="\d{3}-\d{3}-\d{4}" placeholder="Format: 080-555-5555" required>
    </div>
    <div>
      <label for="semester">Semester:</label>
      <input type="number" id="semester" name="semester" min="1" max="8" required>
    </div>
    <div>
      <label for="branch">Branch:</label>
      <input type="text" id="branch" name="branch" list="branch-list" required>
      <datalist id="branch-list">
        <option value="Computer Science">
        <option value="Electrical Engineering">
        <option value="Mechanical Engineering">
        <option value="Civil Engineering">
        <option value="Chemical Engineering">
      </datalist>
    </div>
    <div>
      <label for="website">Website:</label>
      <input type="url" id="website" name="website" placeholder="Pattern: http://" required>
    </div>
    <button type="submit">Submit</button>
  </form>
</body>
</html>

*/

//---------------------------------------------------------------------------------------------
//(a)	Write an npm script having a function vowelCount() that takes a string as 
//input and counts number of occurrences of each vowels in the string. (Hint: run the program through npm start)
 //            For. Eg. Input   :  vowelCount('Le Tour de France') 
   //           Output:  a, e, i, o, and u appear, respectively, 1, 3, 0, 1, 1 times


//To create an npm script with a function vowelCount() that counts the occurrences of each vowel in a given string, you can follow these steps:

//Initialize a new Node.js project by running the following command in your project's root directory:


//********************************************************************************************** */
/*
npm init -y
*/

//************************************************************************************************** */
//Install the readline package, which allows you to read user input from the command line, by running the following command:

//******************************************************************************** */
/*
npm install readline
*/
//******************************************************************************* */
//Create a new JavaScript file, for example, vowelCount.js, and add the following code:


//******************************************************************************** */
/*
const readline = require('readline');

function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const count = {};

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }

  return count;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (str) => {
  const count = vowelCount(str);

  const output = vowels.map((vowel) => {
    const vowelCount = count[vowel] || 0;
    return `${vowel}: ${vowelCount}`;
  });

  console.log(`Output: ${output.join(', ')}`);
  rl.close();
});

*/
//******************************************************************************************** */

//In your package.json file, update the scripts section to include a "start" script that runs the vowelCount.js file:


//************************************************************************************************* */
/*
"scripts": {
  "start": "node vowelCount.js"
},

*/
//***************************************************************************************************** */
//Save the changes to package.json and the vowelCount.js file.

//Run the script by executing the following command in your project's root directory:

//***************************************************************************************************** */
/*
npm start
*/
//*******************************************************************************************************8 */
//You will be prompted to enter a string. Provide the input, and the
// script will count the occurrences of each vowel in the string and display the output.

//Make sure you have Node.js and npm installed on your system before running the above commands. 

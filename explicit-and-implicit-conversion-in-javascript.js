/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// 1st Bug: Problem with Implicit Type Conversion
// Bc of the parentheses, 5 was converted to a string. By adding Number () in front of it, I was able to convert to a Number.
let result = Number("5") - 2;
console.log("The result is: " + result);

// 2nd Bug: Wrong Boolean conversion
// Check if the string is "false" before converting
let isValid = Boolean("false"); 
// The string "false" is truthy in JavaScript (Which means it evaluates to true.)
if (isValid && isValid !== "false") { 
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!");
}

// 3rd Bug: Similar to the 1st bug, 25 was converted to a string. When this happened, it printed 255 instead of 30 (string concatenation). By changing age to a number (with Number()), I was able to get it to print 30 instead of 255.
let age = ("25");
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

//Robert Hasinbiller Code

let implicitExample = "15" * 3;
console.log("Implicit Solution: ", implicitExample);
// Output should be 45

let explicitExample = Number("50");
console.log("Explicit Solution: ", explicitExample, "Type:", typeof explicitExample);
// Output should be 50 & number (i.e. type)

console.log("NaN to Number:", Number(NaN));
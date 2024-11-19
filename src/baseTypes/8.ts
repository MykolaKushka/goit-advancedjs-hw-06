/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// Define the Gender type using a union type
type Gender = "male" | "female";

// Create a variable of type Gender
let myGender: Gender;

// Assign a valid value
myGender = "male"; // Correct
console.log(myGender); // Output: "male"

// Trying to assign an invalid value would result in a TypeScript error
// myGender = "other"; // Error: Type '"other"' is not assignable to type 'Gender'


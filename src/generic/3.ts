/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// Define the merge function with generics
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB); // Create a new object to avoid mutating the originals
}

export {};

/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// Define the function with generics
function getPromise<T>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as T); // Casting the resolved value to type T
  });
}

// Use the function and specify the type of the promise's resolved value
getPromise<[string, number]>() // The resolved value is an array with a string and a number
  .then((data) => {
    console.log(data); // data is of type [string, number]
  });

export {};

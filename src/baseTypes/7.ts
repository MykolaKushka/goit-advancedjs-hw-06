/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Define an enum for days of the week
enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Function to check if the day is a weekend
function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

// Example usage
console.log(isWeekend(WeekDays.Monday));    // Output: false (weekday)
console.log(isWeekend(WeekDays.Saturday)); // Output: true (weekend)
console.log(isWeekend(WeekDays.Sunday));   // Output: true (weekend)

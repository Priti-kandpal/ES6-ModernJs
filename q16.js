//Arrow Functions & Ternary Operator
// (a)
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(11));

// (b)
let marks = 75;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

// (c)
const greet = name => `Hello, ${name ? name : "Guest"}`;

console.log(greet());
console.log(greet("Priti"));

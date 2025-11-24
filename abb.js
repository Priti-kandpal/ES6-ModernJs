
// --- a) Add elements using spread ---
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log("New nums:", newNums); // [1, 2, 3, 4, 5]

// --- b) Combine arrays using spread ---
const a = ["x", "y"];
const b = ["z"];
const combined = [...a, ...b];
console.log("Combined arrays:", combined); // ["x", "y", "z"]

// --- c) Function using rest operator ---
const printNames = (...names) => names;
console.log("Names:", printNames("A", "B", "C")); // ["A", "B", "C"]


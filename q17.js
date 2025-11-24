//Spread, Rest & Destructuring
// (a)
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const result = [...arr1, ...arr2];
console.log(result);  

//(b)
const sum = (...nums) => nums.reduce((total, num) => total + num, 0);
console.log(sum(5, 10, 15, 50));

// (c)
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name, address: { city, pin } } = user;
console.log("Name:", name);
console.log("City:", city);
console.log("Pin:", pin);

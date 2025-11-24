//1. Template Literals + Expressions
//(a)
const p= 5;
const q= 7;
console.log(`${p} + ${q} = ${p + q}`);
//(b)
const Lines = `This is line 1
This is line 2
This is line 3`;
console.log(Lines);
//(c)
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName.concat(" ", lastName)}`);

//2. Arrow Functions & this
const square = n => n * n;
console.log(square(8)); 
/*(b) Arrow functions don’t have their own this; they use this from the surrounding scope. 
So inside obj, this does not refer to the object, making this.value undefined.*/

//(c)
const obj = {
  value: 50,
  test() {   
    console.log(this.value);
  }
};
obj.test(); 

// 3. Rest, Spread & Copying Objects
//(a)
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);
//(b)
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);
//(c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 88));       

//4. Destructuring & Optional Chaining
//(a)
const arr = [10, 20, 30];
const [x, z] = arr;
console.log("x:", x); 
console.log("z:", z); 
// (b) 
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("brand:", brand); 
//(c)
const info = {};
console.log("user name:", info.user?.name); 

/*5. Scoping (let/var/const)
(a) it will print "3"
(b) ReferenceError: j is not defined because in let j : j is block-scoped and hence cannot be accessed out side for block.
(c) const is used for values that should stay the same.
It prevents the variable from being reassigned, making code safer.*/

//6. Ternary Operator – Practice
//(a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed); 
//(b)
const age = 20;
const category = age >= 18 ? "Adult" : "Minor";
console.log(category); 
//(c)
const num = -5;
const type = num > 0 ? "Positive" : (num === 0 ? "Zero" : "Negative");
console.log(type); 

//7. Spread, Rest & Arrays
//(a)

const nums = [1, 2, 3];
const newno = [...nums, 4, 5];
console.log(newno); 
//(b)
const w = ["x", "y"];
const v = ["z"];
const combine = [...w, ...v];
console.log( combine); 
//(c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C")); 

//8. Object Destructuring & Shorthand
//(a)
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id);       
console.log(status); 
//(b)
const userId = 101;
const role = "admin";
const user = { id: userId, role }; 
console.log(user); 
//(c)
const title = "Developer";
const level = "Senior";
const job = {
  title,       
  level,  
  describe() {
    console.log(`This is a ${this.level} ${this.title}`);
  }
};
//console.log(job);  
job.describe(); 

//9. Template Literals (More Practice)
//(a)
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);
//(b)
const name = "priti";
const score = 85;

console.log(`Hello ${name}, your score is ${score}/100`);


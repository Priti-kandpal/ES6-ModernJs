// 1. Global variable
let age = 20;  

// 2. Function in global execution context
function displayAge() {
    console.log("Current age is:", age);
}

// 3. Function that updates global variable
function changeAge() {
    age = 25; // updating the global variable
    console.log("Age has been updated to:", age);
}

// 4. Calling the functions
displayAge();   // prints: Current age is: 20
changeAge();    // prints: Age has been updated to: 25
displayAge();   // prints: Current age is: 25

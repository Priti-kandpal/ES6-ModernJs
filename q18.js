/*Scoping & Optional Chaining
(a) console.log(x)- will give ReferenceError because let is block-scoped and cannot be accessed outside the if block.
 where as for var y ,y can be accessed outside the if block, because var is a global scope*/

// (b)
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email);  
console.log(profile.user?.details?.phone);  

// (c)
const person = {
  name: "Alice",
  pet: {
    type: "dog"
  }
};
console.log(person.pet?.name);   


console.log("Begin");
setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});
console.log("End");

//there is issue of indentation in the previous code.
//Synchronous code runs first — the two console.log task begin and end execute immediately, line by line, while the setTimeout and Promisetask 
//executes after that
console.log("Begin");
setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");
//indentation issue in the previous code
//synchronous code runs first ,thatswhy begin and end execute immediately, line by line.while promise task and timeouttask executed afterwards

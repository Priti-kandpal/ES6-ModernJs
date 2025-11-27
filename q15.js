const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number of seconds to count down: ", (answer) => {
  let timeLeft = Number(answer);
  console.log(`\nStarting countdown from ${timeLeft} seconds...`);
  console.log(`Press "s" at any time to stop the countdown.\n`);
  const countdown = setInterval(() => {
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      process.exit();
    }
  }, 1000);
  process.stdin.setRawMode(true);
  process.stdin.on("data", (key) => {
    setTimeout(() => {
      if (key.toString().trim().toLowerCase() === "s") {
        clearInterval(countdown);
        console.log("\nCountdown stopped.");
        process.exit();
      }
    }, 200);
  });
});

//Question 1: Closure-Based Counter Implementation
function createCounter() {
    let count = 0;   
    return {
        increment() {
            count++;
            console.log("Current incremented count:", count);
        },
        decrement() {
            count--;
            console.log("Current decremented count:", count);
        }
    };
}

const counter1 = createCounter();
counter1.increment();  
counter1.increment();  
counter1.decrement();  
//for a diff counter using same fn
const counter2 = createCounter();
counter2.increment();  
counter2.decrement();  

//Question 2: Simulating Private Variables with Closures
function createBankAccount() {
    let balance = 0;                  
    let transactionHistory = [];      
    return {
        deposit(amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                transactionHistory.push(`Failed withdrawal: ${amount}`);
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }   },
        checkBalance() {
            console.log("Current balance:", balance);
        },
        showHistory() {
            console.log("Transaction History:");
            console.log(transactionHistory);
        }
    };
}
const account = createBankAccount();
account.deposit(500);       
account.withdraw(200);      
account.withdraw(400);     
console.log(account.balance); 
account.checkBalance();      
account.showHistory();        


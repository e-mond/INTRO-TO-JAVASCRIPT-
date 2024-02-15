//IF ELSE
// If Else executes a block of code if a given condition is true and another block of code if the condition is false

// let pastMark = 20;
// let studentMarks = 20;

// if (studentMarks === 20) {
//     console.log("You passed");
// } else {
//     console.log("You failed");
// }


//ELSE IF STATEMENT
// It is used to check if multiple conditions
//     let score = 70
// if (score >= 70) {
//     console.log("A")

// }else if (score >=70 && score <= 79) {
//     console.log("B")

// }else if ( score >= 60 && score <= 69){
//     console.log("C")
// }else{
//     console.log("D")
//}


//SWITCH STATEMENT
//takes in an expressions and compares it with case before excution 
// let a= 30
// let b= 40
// switch (a+b){
//     case 40:
//         console.log(40)
//         break;
//     case 60:
//         console.log(60)
//         break;
//     case 100:
//         console.log(100)
//         break;
//     default:
//         console.log("No Answer!")
// }

// MOMO TEST
// let balance = 2000

// function momobalance  (action, amount){

//  switch (action) {
//     case "deposit":
//         balance += amount;
//         console.log('An amount of  ${amount} has been deposited into your wallet.');
//         break;

//     case "withdraw":
//         if (balance >=  amount){
//             balance -= amount;
//             console.log('An amount of ${amount} has been withdrawn from your wallet.')
            
//         } else {
//             console.log("insufficient balance")
//         } else if(balance -< amount ){
//             console.log("No enough funds")
//         }
//         break;

//     case "checkBalance":
//         console.log('Balance is  ${amount}. ');
//         break;

//     default:
//         console.log('Invaild input');
//  }


// }

// momobalance("deposit", 500);
// momobalance( "withdraw", 300);
// momobalance( "withdraw" , 30000);
// momobalance("checkBalance");

// let balance = 2000;

// function momobalance(action, amount) {
//     switch (action) {
//         case "deposit":
//             balance += amount;
//             console.log(`An amount of ${amount} has been deposited into your wallet.`);
//             break;

//         case "withdraw":
//             if (balance >= amount) {
//                 balance -= amount;
//                 console.log(`An amount of ${amount} has been withdrawn from your wallet.`);
//             } else {
//                 console.log("Insufficient balance");
//             }
//             break;

//         case "checkBalance":
//             console.log(`Balance is ${balance}.`);
//             break;

//         default:
//             console.log('Invalid input');
//     }
// }

// momobalance("deposit", 500);
// momobalance("withdraw", 300);
// momobalance("withdraw", 30000);
// momobalance("checkBalance");


// LOOPS : It is a block of code that is excuted until a condition is met
//For Loop
let number = 0; // Initialize number to 0

for (let i = 0; i <= 100; i++) {
    number = number + 1; // Increment number by 1 in each iteration
    console.log(number); // Output the current value of number to the console
}

//While Loop
// Excutes a block of code that is excuted until a condition is false
let record = 0; // Initialize record

while (record < 100) {
      record = record +5;
      console.log(record); // Output the current value of record to the console
}


//1. Calculate the Tip
//15% if 50 <= x <= 300, else 20%

let bill = 235;
let tip = bill >=50 && bill <= 300 ? bill*.15: bill*.2;
let fullBill = bill+tip;

//2. Output Details
console.log(`The bill was $${bill}, the tip was $${tip}, 
    and the total value is $${fullBill}`);


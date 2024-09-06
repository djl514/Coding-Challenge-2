//1. Calculate the Tip
//15% if 50 <= x <= 300, else 20%

let check = 275;
let tip = check >=50 && check <= 300 ? check*.15: check*.2;
let fullBill = check+tip;

//2. Output Details
console.log(`The bill was $${check}, the tip was $${tip}, 
    and the total value is $${fullBill}`);

//3. Create a Function calculateTip
function calculateTip(bill){
    if (bill >= 50 && bill <=300){
        return bill + bill*.15;
    } else{
        return bill + bill*.2;
    }
}

console.log(`$${calculateTip(100)}`)
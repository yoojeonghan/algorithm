/*
At a lemonade stand, each lemonade costs $5. 
Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  
You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
Note that you don't have any change in hand at first.
Return true if and only if you can provide every customer with correct change.
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let number5 = 0;
    let number10 = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            number5 += 1;
        } else if (bills[i] === 10){
            if (number5 === 0) {
                return false;
            } else {
                number5 -= 1;
                number10++;
            }
        } else {
            if (number10 >= 1 && number5 >= 1) {
                number10 -= 1;
                number5 -= 1;
            } else if (number5 >= 3) {
                number5 -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};

/**
Runtime: 76 ms, faster than 96.60% of JavaScript online submissions for Lemonade Change.
Memory Usage: 40.6 MB, less than 5.34% of JavaScript online submissions for Lemonade Change.
 */

console.log(lemonadeChange([5,5,5,10,20]));
console.log(lemonadeChange([5,5,10,10,20]));
console.log(lemonadeChange([5,5,5,10,5,20,5,10,5,20]));
console.log(lemonadeChange([5,5,5,5,20,20,5,5,5,5]));
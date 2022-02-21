// =================================================
//           Basic concepts of JavaScript
// ==================================================


// 1 variable declaration
var deposit = 400;



// 2. condition 

if (deposit > 500) { // check greater

}
else if (deposit < 200) { // check less

}
else if (deposit == 500) { // check equal

}
else if (deposit != 500) { // check not equal

}
else if (deposit >= 500) { // check greater or equal

}
else if (deposit <= 500) { // check less or equal

}
else {
    // plan 'b'
}

// swithc is used instead of 'if-else' in special cases.




// 3. array
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length; // to know array elements number
numbers.pop(); // remove the last element
numbers.push(111); // to add as last element
numbers[2] = 555; // to change the number of index '2'


// check whether 222 included in the array

// method - 1:
if (numbers.indexOf(222) != -1) {

}
// method - 2:
if (numbers.includes(222)) {

}



// 4. loop
// while, 
// for
// for-of [to run loop on array elements]

for (const number of numbers) {

}



// 5. function

function fullName(first, second) {
    const name = first + ' ' + second;
    return name;
}
const person = fullName('Rahim', 'Ali');

// 6. object 
const bottle = { color: 'yellow', contain: 'water', price: 50 }



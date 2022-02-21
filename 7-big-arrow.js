
// add 2 numbers
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum); // output: 112


// multiply 3 numbers
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result); // output: 144


// show the number 5 times more
const fiveTimes = (num) => num * 5;
const value = fiveTimes(17); // output: 85
console.log(value);



/* parameter একটা থাকলে () না দিলেও চলবে। একাধিক parameter এর ক্ষেত্রে
(bracket) দিতে হবে। */

// show the number 10 times more
const tenTimes = num => num * 10;
const output = tenTimes(17);
console.log(output);


/* parameter না থাকলে () দিয়ে function set করতে হবে। */
const getName = () => 'Manik Islam';
const name = getName()
console.log(name);


/* 1. multiline এর arrow function করতে হলে => এর পর {} এর ভিতর 
function গুলো লিখতে হবে normal function লেখার মত।

2. return করতে হবে। single line arrow function এ return করা লাগে না আলাদা করে। multi line arrow function এ আলাদা করে return করতে হয়।
অর্থাৎ return দরকার হলে return করতে হবে।
*/

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);



/*
video summary - 11:55
*/


// arrow function দিয়ে DOM use করে event handle করতে পারি।

// document.getElementById('my-btn').addEventListener(event => ){

// }

// এটা আমরা সামনে শিখবো।




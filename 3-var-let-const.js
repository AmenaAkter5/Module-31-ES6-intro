
// Normal variable declare

var price = 500;



// break up with var : let & const

// এখন আমরা নতুন নিয়মে variable declare করবো। const এবং let দিয়ে।


// 1. আমরা const দিয়ে declare করা variable এ value reassign করতে পারি না।

const balance = 1240;
balance = 1340;

// এখন এটাকে console করে দেখতে গেলে আমাদেরকে error দিবে।


// 2. variable এর value change করতে হবে এমন variable কে let দিয়ে declare করতে হবে।

let balance = 1240;
balance = 1340;



// 3. কিন্তু আমরা const এর variable কে use করে অন্য variable declare করতে পারি।
const userName = 'janpakhi potas potas';
const weTogether = 'ami ' + userName; // 'userName' variable is used here

console.log(weTogether); // output: ami janpakhi potas potas

// reassign the value of 'userName'
userName = 'moyna pakhi'; // not allowed কারণ এটা reassign করা হচ্ছে।



// 4. declare 'array' by const
const numbers = [45, 23, 89, 60];

// reassign the value of 'numbers'
numbers = [99, 145, 3]; // not allowed কারণ এটা reassign করা হচ্ছে।

// কিন্তু 'array' কে modify করা যাবে
numbers.push(555); // add last element of an array
numbers[1] = 333; // change the element of index 1.

// loop through to see the every elements of an array
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // number এর value প্রতিবার new হচ্ছে। reassign করা হচ্ছে না। তাই const use করা যাবে।
    console.log(number);
}

// sum এর value change হচ্ছে। আগের value'র সাথে new number add হয়ে।
// তাই sum কে let দিয়ে declare করা হয়েছে।
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}



// 4. declare 'object' by const
const student = { roll: 101, name: 'mofij', job: 'intern' };

// can change the value of object property
student.name = 'MOfazzol';

// object কে new value দেয়া যাবে না।
student = { name: 'mofazzol' }; // not allowed




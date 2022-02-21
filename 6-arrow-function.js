
// Normal function declaration
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const sum = add(15, 17);
console.log(sum);

// or,
function add(num1, num2) {
    return num1 + num2; // without declare variable for adding
}

const sum1 = add(15, 17);
console.log(sum1);

// ছোট যোগে এভাবে করা যাবে। বড় হলে variable এ রাখা লাগতেই পারে যোগকে।





// function কে variable এ ও রাখা যায়- 

// এটা আমরা DOM এ দেখেছি
document.getElementById('my-btn').onclick = function handleEvent() {
    console.log('my-btn clicked');
}


// function expression [kind of like JS expression]
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const sum2 = add2(15, 17); // call করছে variable কে।
console.log(sum2);

/* variable এর নামে function এর নাম দেয়া ভালো। function এর নাম ভিন্ন 
হলেও call করতে হবে variable এর নামেই। তাই function এর নাম না দিলেও
চলবে। */


// function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

const sum3 = add3(15, 17); // call করছে variable কে।
console.log(sum3);




//arrow function

/* 
1. function এর variable declare করবো। mainly এটাই function name
2. function keyword use করবো না। 
3. directly parameter দেবো () এর ভেতর
4. একটা arrow দেবো => [function বুঝানোর জন্য]
5. parameter দিয়ে যা করতে চাই তার কাজ set করবো
*/

const add4 = (num1, num2) => num1 + num2;

const sum4 = add4(15, 17);
console.log(sum4);






// all function calling

const sum = add4(15, 17);
const sum1 = add4(15, 17);
const sum2 = add4(15, 17);
const sum3 = add4(15, 17);
const sum4 = add4(15, 17);

console.log(sum1, sum2, sum2, sum3, sum4);

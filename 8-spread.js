
// spread operators / three dots (...)

// আমরা array কে concat করি একটা বড় array পেতে


/* spread operator দিয়ে আমরা arrayর element গুলোকে আলাদা করে দিয়ে 
অন্য কোথাও ব্যবহার করতে পারবো। */

const numbers = [23, 65, 99, 21, 34];
console.log(numbers); // output: provides the numbers array
console.log(...numbers); // output: not array. just provides the every elements of an array



// Find the maximum numbers
const max = Math.max(23, 99, 65);
const max2 = Math.max(23, 99, 65, 21, 34);

console.log(max);




// Find the maximum numbers in an array

/* normally we don't get the maximum numbers of array. so here we using 
the spread operators to get elements of array and then find out the
maximum number. 

Max, min সংখ্যার উপর ই কাজ করে। array'র উপর নয়।
*/

const numberList = [23, 65, 99, 21, 105, 34];
const maxInArray = Math.max(numberList);
console.log(maxInArray); // output: NaN


// to get the right result we use (...) spread operators
const numberList = [23, 65, 99, 21, 105, 34];
const maxInArray = Math.max(...numberList);
console.log(maxInArray); // output: 105


// to get the minimum numbers
const num = [2, 4, 67, 54];
const min = Math.min(...num)
console.log(min);

// we can add elements in array by using spread operators [just like push]


// push on previous array by declaring new variable
const numbersNew = numbers;
numbers.push(55);
console.log(numbersNew); // we see the numbers array with new element: 55 



// use the previous array elements to declare new array
const numbers2 = [...numbers];
console.log(numbers2);


// add element on previous array by declaring new variable [just like push]
const numbers3 = [...numbers, 88];
console.log(numbers3);


// add elements in first
const numbers4 = [22, ...numbers, 88];
console.log(numbers4);





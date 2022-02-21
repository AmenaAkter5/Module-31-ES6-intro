
// three categories 'quotation mark' to declare string

const priya = 'Asif Akbar'; // single quote
const meye = "Meye tumi ki dukkho chino"; // double quote
const kobita = `kobita tumi sopno charini`; // back quote/tick [carret]



// to write the string in multiline

// 1. single quote is used in every line
const multiLine = 'This is my first line.' +
    'this is my second line.' +
    'third line text here' +
    'fourth line text here';

// but in console it shows in a single line.
console.log(multiLine);



/* to see it in multi line by console : 

1. add '\n' to break the paragraph in each line */

const multiLineAgain = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';

console.log(multiLineAgain);


/* 2. we can use to back quote to write the string in multiline
and see the multilined output by console it*/

const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;

console.log(multiLineNew);




/* advantages of 'back quote' / template string

to write the string 'dynamically' we use back quote কারণ 
single quote এ dynamically string লেখা যায় না।*/


// ** old method:

// directly friend number use করা
const old = '<h3 class="friend-name">Friend-5</h3>'

// use the 'variable'
const count = 5;

const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';


// ** New Method : template string ${count} দিয়ে variable বসিয়ে
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;


// 2nd bracket এর ভিতর সব js expression use করা যাবে।

// Example - 1
const friendlist = ['abul', 'babul', 'kabul', 'sabul'];
const new2 = `<h3 class="friend-name">Friend-${friendlist.length}</h3>`;

console.log(new2);



// Example - 2
const first = 'Manik';
const last = 'Islam';

// old method
const fullOld = first + ' ' + last;
const fullOld2 = 'This person name is ' + first + ' ' + last;

// new method
const fullNew = `${first} ${last}`; // এখানে space রাখতে হবে output এ space পেতে।

const friends = ['abul', 'babul', 'kabul', 'sabul'];
const fullNew2 = `This person name is: ${first} ${last}. Has money ${friends.length * 500}. He lives in Dhaka.`;

// we can complex it
const fullNew3 = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew3);



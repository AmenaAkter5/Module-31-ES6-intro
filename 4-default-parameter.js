
// Normal function
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}

const result = add(15, 17);
console.log(result);

/* অনেক সময় function এ অনেকগুলো parameter থাকলে কোন parameter
দেয়া missing হতে পারে। যেমন- */

const result = add(15);
console.log(result); // output: NaN

/* এখানে 2nd parameter 'undefined' থাকায় result দেখাবে NaN. 
কারণ 15 এর সাথে undefined সংখ্যা add হয়ে output দেখাবে NaN*/



// before ES6


/* তখন আমরা missing parameter এর undefined হওয়া ঠেকাতে কিছু শর্ত 
আরোপ করতাম যাতে output NaN না আসে।*/

/* 1. যদি কোন parameter undefined থাকে তার value করে দিতে হবে 0
এমন condition set করা হতো। */
function add(num1, num2) {
    // option 1
    if (num2 == undefined) {
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}

const result = add(15);
console.log(result);



/* 2. যদি কোন parameter value না দেয়া হয় তখন তার value যেন 0 কে 
নেয় এমন condition set করা হতো। */
function add(num1, num2) {
    // option 2
    num2 = num2 || 0; // num2 এর value যা দেয়া হবে তাই 'or' 0 হবে।
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);



// after ES6


/* ES6 আসার পর আমরা এখন function এ ই একটা default value set করে 
দিতে পারি। কোন parameter pass হওয়ার কারণ না থাকলে তখন আমরা এর default
value দিয়ে দিতে পারি যেন output NaN না হয়।

অর্থাৎ function call এ parameter missing থাকলে তখন default value টা
function use করবে। আর parameter value দেয়া থাকলে default value নিবে না।
*/

function add(num1, num2 = 33) {
    const total = num1 + num2;
    return total;
}
const result = add(15); // 2nd value missing তাই এখন এটা 33 value নিবে।
const result = add(15, 0); // 2nd value দেয়া তাই এখন এটা 0 value নিবে।
console.log(result);




// More Example : default parameter - using 'string'
function fullName(first, last = 'Islam') {
    const name = first + ' ' + last;
    return name;
}

const belovedPersonName = fullName('Manik'); // 2nd value missing তাই এখন এটা 'Islam' value নিবে।
console.log(belovedPersonName);



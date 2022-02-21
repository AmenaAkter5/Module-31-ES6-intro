
// ES6

// 1. let-const
let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Shahjahan';



// 2. default parameter
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}


// 3. template string

const myPeople = `My lovely person is ${hubby} and his fullName is ${getName(hubby)}. My name is ${priyoPerson}.`

console.log(myPeople);



// 4. arrow function

const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;

const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const finalResult = bigArrowFunc(5, 6, 7);
console.log(finalResult);



// 5. spread operators

const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers)
console.log(min);



// video summary- 10:31




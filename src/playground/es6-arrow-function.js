//ES5 arrow function, there are two forms.
//const square = function (x) { - This is way you write more.
function square(x) {
    return x * x;
};

console.log(square(8));

//ES6 arrow function
const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(9));

//Arrow function expression
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(4));

/*const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));*/

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));


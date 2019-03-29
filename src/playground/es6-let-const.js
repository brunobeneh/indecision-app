var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping Let and Const are block scope! They are not global! Only var are global in statements.

const fullName = 'Jen Mead';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0]; //.split method splita a string apartir do espaço transformando num array, 0 é Jen, 1 é Mead.
    console.log(firstName);
}

console.log(firstName);
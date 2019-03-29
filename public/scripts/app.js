'use strict';

//Arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

//This keyword - no longer bound

var user = {
    name: 'Bruno',
    cities: ['RJ', 'MG', 'SP'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

//.forEach form:
/* this.cities.forEach((city) => {
    console.log(this.name + ' has lived in ' + city);
})
}
};
user.printPlacesLived();*/

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};
console.log(multiplier.multiply());

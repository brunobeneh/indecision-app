//Arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

//This keyword - no longer bound

const user = {
    name: 'Bruno',
    cities: ['RJ', 'MG', 'SP'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
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


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());
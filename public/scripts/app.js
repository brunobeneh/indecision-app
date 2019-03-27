'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Bruno',
    age: 32,
    location: 'RJ'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location ',
            location
        );
    } //você pode colocar o else retornando undefined que da nos mesmo.
}
//Temos 3 exemplos de condicional (function technique) em JSX, o primeiro é operador ternario, segundo é lógico e operador e terceiro é if statements(se senão)
//A tradução para o primeiro exemplo é, se não tiver user.name use a string 'Anonymous'
//A tradução para o segundo exemplo é, se tiver um user.age e ele for maior que 18, mostre, se não não mostre nada
//No terceiro exemplo, usamos a função getLocation, com o argumento user.location, se não tiver não mostre nada.
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

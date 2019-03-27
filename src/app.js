console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Bruno',
    age: 32,
    location: 'RJ'
};
function getLocation(location) {
    if (location) {
        return <p>Location {location}</p>;
    }//você pode colocar o else retornando undefined que da nos mesmo.
}
//Temos 3 exemplos de condicional (function technique) em JSX, o primeiro é operador ternario, segundo é lógico e operador e terceiro é if statements(se senão)
//A tradução para o primeiro exemplo é, se não tiver user.name use a string 'Anonymous'
//A tradução para o segundo exemplo é, se tiver um user.age e ele for maior que 18, mostre, se não não mostre nada
//No terceiro exemplo, usamos a função getLocation, com o argumento user.location, se não tiver não mostre nada.
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
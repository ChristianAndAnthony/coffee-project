"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<div class="roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === allRoasts) {
            for (var i = 0; i <= coffee.length - 1; i++) {
                return
                var allRoasts = coffees[i].roast;
            }
        } console.log(allRoasts)
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#coffee-name');

searchBar.addEventListener("keyup", e => {
    const searchString = e.target.value;
    const filteredNames = coffees.filter(coffee => {
        return (
            coffee.name.toLowerCase().includes(searchString) ||
            coffee.roast.toLowerCase().includes(searchString)
        );
    });
    tbody.innerHTML = renderCoffees(filteredNames);
});

// function search (e) {
//     var searchName = searchBar.value;
//     var filterNames = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.name === searchName) {
//             filterNames.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filterNames);
//
// }

tbody.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);

// console.log(coffees[i].roast);


    // for (var i = 0; i <= coffees.length - 1; i++) {
    //     console.log(coffees[i].roast)
    // }












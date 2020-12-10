/*jshint esversion: 6 */
let pokemonRepository = (function() {
let pokemonList = [
  {name: 'Ninetales', height: 1.2, types: ['Fire']},
  {name: 'Butterfree', height: 1.1, types: ['Bug', 'Flying']},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal']},
  {name: 'Deerling', height: 0.6, types: ['Grass', 'Normal']}
];
function add(pokemon) {
    pokemonRepository.add(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('name-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', showDetails); //I am not sure that I called the showDetails function correctly here
  }

  function showDetails(pokemon) {
    console.log(pokemon.name + pokemon.height + pokemon.types); //pokemon details should print to console
  }

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
}) ();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

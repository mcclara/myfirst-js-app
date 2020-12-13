/*jshint esversion: 6 */
let pokemonRepository = (function() {
let pokemonList = [];
let apiURL = 'https://pokeapi.co/api/v2/pokemon/';

function add(pokemon) {
    pokemonRepository.add(pokemon);
    "name" in pokemon &&
    "detailsUrl" in pokemon
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
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
  }

  function loadList (){
    return fetch(apiURL);
  }

  function showDetails(pokemon) {
    console.log(pokemon.name + pokemon.height + pokemon.types); //pokemon details should print to console
  }

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
  };
}) ();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

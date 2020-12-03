/*jshint esversion: 6 */
let pokemonRepository = (function() {
let pokemonList = [
  {name: 'Ninetales', height: 1.2, types: ['Fire']},
  {name: 'Butterfree', height: 1.1, types: ['Bug', 'Flying']},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal']},
  {name: 'Deerling', height: 0.6, types: ['Grass', 'Normal']}
];
function add(pokemon) {
    pokemonRepository.add(item);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
}) ();

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' and is ' + pokemon.types + " ");
});

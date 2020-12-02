/*jshint esversion: 6 */
let pokemonList = [
  {name: 'Ninetales', height: 1.2, types: ['Fire']},
  {name: 'Butterfree', height: 1.1, types: ['Bug', 'Flying']},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal']},
  {name: 'Deerling', height: 0.6, types: ['Grass', 'Normal']}
];

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' and is ' + pokemon.types + " ");
});

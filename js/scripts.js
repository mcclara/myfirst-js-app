/*jshint esversion: 6 */
let pokemonList = [
  {name: 'Ninetales', height: 1.2, types: ['Fire']},
  {name: 'Butterfree', height: 1.1, types: ['Bug', 'Flying']},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal']},
  {name: 'Deerling', height: 0.6, types: ['Grass', 'Normal']}
];

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <0.6){
    document.write(pokemonList[i].name + " " + 'height:' + pokemonList[i].height);
  }else if (pokemonList[i].height ===0.6){
    document.write(pokemonList[i].name + " " + 'height:' + pokemonList[i].height);
  }else if (pokemonList[i].height ===1.1){
    document.write(pokemonList[i].name + " " + 'height:' + pokemonList[i].height + " " + "Wow, that's big"); //Conditional added to write "Wow, that's big for any height over 1.1"
  }else if (pokemonList[i].height ===1.2){
    document.write(pokemonList[i].name + " " + 'height:' + pokemonList[i].height);
  }
}

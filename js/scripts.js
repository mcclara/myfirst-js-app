/*jshint esversion: 6 */
let pokemonRepository = (function() {
let pokemonList = [];
let apiURL = 'https://pokeapi.co/api/v2/pokemon/';

function add(pokemon) {
      typeof pokemon === "object" &&
      "name" in pokemon
    {
      pokemonList.push(pokemon);
    }
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

  function loadList () {
    return fetch(apiURL).then(function (response) {
      return response.json();
    }) .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }) .then (function (details) {
      item.imageUrl = details.sprites;
      item.height = details.height;
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
    showModal;
    }); //pokemon details should print to console
  }

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
}) ();

function showModal(title, text) {
  let modalContainer = document.querySelector('#modal-container');

  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  //closeButtonElement.addEventListener('click', hideModal);


  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

/* function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  }); */

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Pokemon Img', 'pokemon height');
});

  pokemonRepository.loadList().then(function ()  {
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});

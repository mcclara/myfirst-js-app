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
      item.imageUrl = details.sprites.front_default;
      item.name = details.name;
      item.height = details.height;
      item.types = details.types;
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
    showModal(item);
  }); //Pokemon image and height should show after clicking on name
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

let modalContainer = document.querySelector('#modal-container');

function showModal(item) {
  let modalBody = $(".modal-body");
  let modalTitle = $("modal-title");
  let modalHeader = $("modal-header");

  $('#modal-container').modal('show');

  modalTitle.empty();
  modalBody.empty();

  /* Original coding used before adding bootstrap:
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal); */

  let nameElement = $("<h1>" + item.name + "</h1>");

  let imageElement = $('<img class="modal-img" style="width:50%px>');
  imageElement.attr("src", item.imageUrl);

  let heightElement = $("<p>" + item.height + "</p>");

  let typesElement = $("<p>" + item.types + "</p>");

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(typesElement);

  /* Original Code used before adding Bootstrap
  modal.appendChild(closeButtonElement);
  modal.appendChild(imageElement);
  modal.appendChild(nameElement);
  modal.appendChild(heightElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible'); */
}

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

 window.addEventListener('keydown', (e) => {

  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Pokemon Img', 'pokemon height');
});

  pokemonRepository.loadList().then(function ()  {
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});

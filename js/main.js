const elList = document.querySelector("[data-pokemon-list]");
const elForm = document.querySelector("[data-form]");
const elFilterForm = document.querySelector("[data-filter-form]");
const elInputImgUrl = document.querySelector("[data-form-img]");
const elInputName = document.querySelector("[data-form-name]");
const elInputType = document.querySelector("[data-form-type]");
const elInputWidth = document.querySelector("[data-form-width]");
const elInputHeigth = document.querySelector("[data-form-heigth]");
const elInputWeaknesses = document.querySelector("[data-form-weaknesses]");
const elInputSearch = document.querySelector("[data-form-search]");
const elTemplate = document.querySelector("[data-template]");
const elSelectFilter = document.querySelector("[data-form-select]");
const elOptionFilter = document.querySelector("[data-form-option]");
renderPokemon(pokemons);

function renderPokemon(pPokemons) {
  elList.innerHTML = "";
  pPokemons.filter((pokemon) => {
    elList.appendChild(cretePokemon(pokemon));
  });
}

elFilterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
var elFIlterButton = document.querySelector("[data-filter-button]")

elFIlterButton.addEventListener("click", (evt) => {
  elOptionFilter.filter((pokemon) => {
    filteredPokemon = [];
    if(elOptionFilter.value.includes(elOptionForm.value)) {
      filteredPokemon.push(pokemon)
    }
  })
});
  })
  
  

// elInputSearch.addEventListener("keyup", (evt) => {
//   var newPokemons = [];
//   pokemons.filter((pokemon) => {
//     if (pokemon.name.includes(elInputSearch.value)) {
//       newPokemons.push(pokemon);
//     }
//   });

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var pokemon = {
    img: null,
    name: null,
    type: [],
    weaknesses: [],
    height: null,
    weight: null,
  };
  pokemon.img = elInputImgUrl.value;
  pokemon.name = elInputName.value;
  pokemon.type = elInputType.value;
  pokemon.weaknesses = elInputWeaknesses.value;
  pokemon.height = elInputHeigth.value;
  pokemon.weight = elInputWidth.value;


  pokemons.unshift(pokemon);

  elList.prepend(cretePokemon(pokemon));

  elInputHeigth.value = "";
  elInputName.value = "";
  elInputType.value = "";
  elInputWidth.value = "";
  elInputImgUrl.value = "";
});

function cretePokemon(pokemon) {
  var elCard = elTemplate.content.cloneNode(true);
  var elCardImg = elCard.querySelector("img");
  var elButtonDelete = elCard.querySelector("[data-card-delate]");

  elButtonDelete.addEventListener("click", (evt) => {
    elButtonDelete.closest(".card").remove();
  });

  elCardImg.src = pokemon.img;
  elCardImg.alt = pokemon.name;
  elCard.querySelector("[data-card-name]").textContent = pokemon.name;
  elCard.querySelector("[data-card-type]").textContent = joinArray(
    pokemon.type,
    ", "
  );
  elCard.querySelector("[data-card-weidth]").textContent = pokemon.weight;
  elCard.querySelector("[data-card-heigth]").textContent = pokemon.height;
  elCard.querySelector("[data-card-weaknesses]").textContent =
    pokemon.weaknesses;

  return elCard;
}

elInputSearch.addEventListener("keyup", (evt) => {
  var newPokemons = [];
  pokemons.filter((pokemon) => {
    if (pokemon.name.includes(elInputSearch.value)) {
      newPokemons.push(pokemon);
    }
  });

  renderPokemon(newPokemons);
});

function joinArray(arr, separator = "") {
  var str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];

    if (i !== arr.length - 1) {
      str += separator;
    }
  }
  return str;
}

var elList = document.querySelector("[data-pokemon-list]");
var elForm = document.querySelector("[data-form]");
var elInputImgUrl = document.querySelector("[data-form-img]");
var elInputName = document.querySelector("[data-form-name]");
var elInputType = document.querySelector("[data-form-type]");
var elInputWidth = document.querySelector("[data-form-width]");
var elInputHeigth = document.querySelector("[data-form-heigth]");
var elInputWeaknesses = document.querySelector("[data-form-weaknesses]");
var elInputSearch = document.querySelector("[data-form-search]");
var elTemplate = document.querySelector("[data-template]");
renderPokemon(pokemons);

function renderPokemon(pPokemons) {
  elList.innerHTML = "";
  pPokemons.forEach((pokemon) => {
    elList.appendChild(cretePokemon(pokemon));
  });
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var pokemon = {
    img: null,
    name: null,
    type: null,
    weaknesses: null,
    height: null,
    weight: null,
  };
  pokemon.img = elInputImgUrl.value;
  pokemon.name = elInputName.value;
  pokemon.type = elInputType.value;
  pokemon.weaknesses = elInputWeaknesses.value;
  pokemon.height = elInputHeigth.value;
  pokemon.weight = elInputWidth.value;

  console.log(pokemon);

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
  pokemons.forEach((pokemon) => {
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

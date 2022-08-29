var elList = document.querySelector("[data-pokemon-list]");
var elForm = document.querySelector("[data-form]");
var elInputImgUrl = document.querySelector("[data-form-img]");
var elInputName = document.querySelector("[data-form-name]");
var elInputType = document.querySelector("[data-form-type]");
var elInputWidth = document.querySelector("[data-form-width]");
var elInputHeigth = document.querySelector("[data-form-heigth]");
var elInputWeaknesses = document.querySelector("[data-form-weaknesses]");
var elButtondelete = document.querySelector("[data-button]");
renderPokemon();

function renderPokemon() {
  for (var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];

    elList.appendChild(cretePokemon(pokemon));
  }
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
  var elCard = document.createElement("div");
  var elImg = document.createElement("img");
  var elDiv = document.createElement("div");
  var elImgDiv = document.createElement("div");

  elImg.src = `${pokemon.img}`;
  elDiv.innerHTML = `
  <h2 class="card-title pokemon__card-header">${pokemon.name}
  </h2>
  <p class="card-text pokemon__content-type">${pokemon.type}</p>
  <p class="card-text pokemon__content-type">${pokemon.weaknesses}</p>
  <div class="pokemon__content-wrapper">
  <h3 class="card-text pokemon__content-weight">${pokemon.height}</h3>
  <h3 class="card-text pokemon__content-weight">${pokemon.weight}</h3>
  </div>
  `;

  elCard.classList.add("pokemon__card");
  elCard.classList.add("col-3");
  elCard.classList.add("card");
  elCard.classList.add("pokemon__card");
  elList.classList.add("row");
  elDiv.classList.add("pokemon__content");
  elDiv.classList.add("card-body");
  elImg.classList.add("pokemon__img");
  elImg.classList.add("card-img-top");
  elImgDiv.classList.add("pokemon__img-box");
  elImg.alt = `${pokemon.name}`;
  elImg.width = 157;
  elImg.height = 157;

  elImgDiv.appendChild(elImg);
  elCard.appendChild(elDiv);
  elCard.prepend(elImgDiv);

  return elCard;
}

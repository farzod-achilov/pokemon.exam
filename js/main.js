var elList = document.querySelector("[data-pokemon-list]");

for (var i = 0; i < pokemons.length; i++) {
  var pokemon = pokemons[i];

  var elCard = document.createElement("div");
  var elImg = document.createElement("img");
  var elDiv = document.createElement("div");

  elImg.src = `${pokemon.img}`;
  elDiv.innerHTML = `
  <h2 class="card-title">${pokemon.name}</h2>
  <p class="card-text">${pokemon.type}</p>
  <div>
  <p class="card-text">${pokemon.height}</p>
  <p class="card-text">${pokemon.weight}</p>
  </div>
  `;

  elCard.classList.add("pokemon__card");
  elCard.classList.add("col-3");
  elCard.classList.add("card");
  elList.classList.add("row");
  elDiv.classList.add("pokemon__content");
  elDiv.classList.add("card-body");
  elImg.classList.add("pokemon__img");
  elImg.classList.add("card-img-top");
  elImg.alt = `${pokemon.name}`;
  elImg.width = 157;
  elImg.height = 157;

  elCard.appendChild(elImg);
  elCard.appendChild(elDiv);
  elList.appendChild(elCard);
}

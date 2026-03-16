function convertPokemonsTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertToPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.types[0].type.name}">
        <div class="card-pokemon-wrapper">
            <p class="name">${pokemon.name}</p>
            <span class="number">#${String(pokemon.id).padStart(3, "0")}</span>
        </div>
        <div class="content-wrapper">
            <ol class="atributos">
                ${convertPokemonsTypesToLi(pokemon.types).join("")}
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" 
            alt="${pokemon.name}"/>
        </div>
    </li>`;
}

const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 20;
let offset = 0;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertToPokemonToLi).join("");
        pokemonList.innerHTML += newHtml;
    });
}

loadMoreButton.addEventListener("click", () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
});

// Carrega a primeira página
loadPokemonItems(offset, limit);

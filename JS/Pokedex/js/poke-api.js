const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url) //Foi no servidor e buscou a lista de Pokemons
        .then((response) => response.json()) //Transformou a lista em JSON
        .then((jsonBody) => jsonBody.results) //Depois de converter pegamos a lista e transformamos em uma lista de promessas
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => pokemonDetails);
};

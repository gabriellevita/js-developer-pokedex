

const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (limit=10, offset=0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}

/* Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch(`https://pokeapi.co/api/v2/pokemon/2`),
    fetch(`https://pokeapi.co/api/v2/pokemon/3`),
    fetch(`https://pokeapi.co/api/v2/pokemon/4`),
]).then((results) => {
    console.log(pokemonsDetails)
}) */
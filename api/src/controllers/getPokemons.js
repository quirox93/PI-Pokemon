const axios = require("axios");
const pokeApi = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
  const { data } = await axios.get(pokeApi);

  return data.results;
};

const getPokemonByName = async (name) => {
  const { data } = await axios.get(`${pokeApi}/${name}`);
  const pokemonData = {
    nombre: data.name,
    altura: data.height,
    peso: data.weight,
    imagen: data.sprites.other["official-artwork"],
    gif: data.sprites.versions["generation-v"]["black-white"]["animated"],
  };
  return pokemonData;
};

const getPokemonById = async (idPokemon) => {
  const { data } = await axios.get(`${pokeApi}/${idPokemon}`);
  const pokemonData = {
    nombre: data.name,
    altura: data.height,
    peso: data.weight,
    imagen: data.sprites?.other?.home,
  };
  return pokemonData;
};

module.exports = { getPokemons, getPokemonById, getPokemonByName };

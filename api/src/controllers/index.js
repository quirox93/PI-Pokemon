const createPokemon = require("./createPokemon");
const getAllPokemons = require("./getAllPokemons");
const getPokemonByIdOrName = require("./getPokemonByIdOrName");
const { getTypes } = require("./getTypes");

module.exports = {
  getTypes,
  getAllPokemons,
  getPokemonByIdOrName,
  createPokemon,
};

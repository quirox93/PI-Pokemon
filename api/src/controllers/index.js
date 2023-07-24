const createPokemon = require("./createPokemon");
const getAllPokemons = require("./getAllPokemons");
const getPokemonById = require("./getPokemonById");
const getPokemonByName = require("./getPokemonByName");
const getPokemonByUUID = require("./getPokemonByUUID");
const { getTypes } = require("./getTypes");

module.exports = {
  getTypes,
  getAllPokemons,
  getPokemonByUUID,
  getPokemonById,
  createPokemon,
  getPokemonByName,
};

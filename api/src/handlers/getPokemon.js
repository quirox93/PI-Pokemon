const handlerGetAllPokemons = require("./getAllPokemons");
const handlerGetPokemonByName = require("./getPokemonByName");

const handlerGetPokemon = async (req, res) => {
  const { name } = req.query;
  name ? handlerGetPokemonByName(req, res) : handlerGetAllPokemons(req, res);
};

module.exports = handlerGetPokemon;

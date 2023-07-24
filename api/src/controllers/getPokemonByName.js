const { pokeApi, formatData } = require("./utils");
const axios = require("axios");
const { Pokemon, Type } = require("./../db");

const getPokemonByName = async (name) => {
  const dbPokemon = await Pokemon.findOne({
    where: { name: name },
  });

  if (dbPokemon) return dbPokemon;

  const { data } = await axios.get(`${pokeApi}pokemon/${name}`);
  return formatData(data);
};

module.exports = getPokemonByName;

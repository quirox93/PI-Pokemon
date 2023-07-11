const getPokemonByIdOrName = require("./getPokemonByIdOrName");
const { pokeApi } = require("./utils");
const axios = require("axios");

const getData = (e) => getPokemonByIdOrName(e.name);

const getAllPokemons = async () => {
  const { data } = await axios.get(pokeApi + "pokemon", {
    params: {
      limit: 151,
      offset: 0,
    },
  });
  const allPokemons = data.results.map(getData);
  const allData = await Promise.all(allPokemons);
  return allData;
};

module.exports = getAllPokemons;

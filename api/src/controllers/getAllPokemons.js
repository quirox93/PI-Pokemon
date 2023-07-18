const getPokemonByIdOrName = require("./getPokemonByIdOrName");
const { pokeApi } = require("./utils");
const axios = require("axios");

const getAllPokemons = async () => {
  const { data } = await axios.get(pokeApi + "pokemon", {
    params: {
      limit: 21,
      offset: 0,
    },
  });
  const allPokemons = data.results.map(getData);
  const allData = await Promise.all(allPokemons);
  return allData;
};

const getData = (e) => getPokemonByIdOrName(e.name);

module.exports = getAllPokemons;

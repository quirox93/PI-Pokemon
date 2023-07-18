const { pokeApi, formatData } = require("./utils");
const axios = require("axios");

const getPokemonByIdOrName = async (idOrName) => {
  const { data } = await axios.get(`${pokeApi}pokemon/${idOrName}`);
  return formatData(data);
};

module.exports = getPokemonByIdOrName;

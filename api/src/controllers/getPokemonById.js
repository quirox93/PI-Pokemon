const { pokeApi, formatData } = require("./utils");
const axios = require("axios");

const getPokemonById = async (id) => {
  const { data } = await axios.get(`${pokeApi}pokemon/${id}`);
  return formatData(data);
};

module.exports = getPokemonById;

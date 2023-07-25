const { pokeApi, formatData } = require("./utils");
const axios = require("axios");
const { Pokemon, Type } = require("./../db");
const { DB_DEPLOY } = process.env;
const limit = DB_DEPLOY.includes("localhost") ? 151 : 30;
const getAllPokemons = async () => {
  const { data } = await axios.get(pokeApi + "pokemon", {
    params: {
      limit,
      offset: 0,
    },
  });
  const allData = data.results.map(getData);
  const allOriginalPokemons = await Promise.all(allData);

  const allDbPokemons = await Pokemon.findAll({ include: { model: Type, as: "type" } });

  const allPokemons = allDbPokemons
    .map((e) => {
      const type = e.type.map((e) => e.name);
      return { ...e.dataValues, type };
    })
    .concat(allOriginalPokemons);

  return allPokemons;
};

const getData = async (e) => {
  const { data } = await axios.get(`${pokeApi}pokemon/${e.name}`);
  return formatData(data);
};

module.exports = getAllPokemons;

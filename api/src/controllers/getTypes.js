const { Type } = require("./../db");
const axios = require("axios");
const pokeApi = "https://pokeapi.co/api/v2/";

const getTypes = async () => {
  const types = await Type.findAll();
  return types;
};

const setTypes = async () => {
  //Preparar la tabla de Types
  const types = await Type.findAll();
  if (!types.length) {
    const { data } = await axios.get(pokeApi + "type");

    const mapTypes = data.results.map(({ name }) => {
      return { nombre: name };
    });
    await Type.bulkCreate(mapTypes);
    console.log("Types created");
  }
};

module.exports = {
  getTypes,

  setTypes,
};

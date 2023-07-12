const { Type } = require("./../db");
const axios = require("axios");
const { pokeApi } = require("./utils");

const getTypes = async () => {
  const types = await Type.findAll();
  return types.map((e) => e.name);
};

const setTypes = async () => {
  //Preparar la tabla de Types
  const types = await Type.findAll();
  if (!types.length) {
    const { data } = await axios.get(pokeApi + "type");

    const mapTypes = data.results.map(({ name }) => {
      return { name };
    });
    await Type.bulkCreate(mapTypes);
    console.log("Types created");
  }
};

module.exports = {
  getTypes,
  setTypes,
};

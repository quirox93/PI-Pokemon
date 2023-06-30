const { Type } = require("./../db");
const axios = require("axios");
const pokeApi = "https://pokeapi.co/api/v2/";

module.exports = {
  getTypes: async () => {
    const types = await Type.findAll();
    return types;
  },

  setTypes: async () => {
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
  },
};

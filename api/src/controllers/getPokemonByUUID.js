const { Pokemon, Type } = require("./../db");

const getPokemonByUUID = async (uuid) => {
  const pokemon = await Pokemon.findByPk(uuid, {
    include: { model: Type, as: "type" },
  });
  const type = pokemon.type.map((e) => e.name);
  return { ...pokemon.dataValues, type };
};

module.exports = getPokemonByUUID;

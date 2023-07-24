const { Pokemon, Type } = require("./../db");

const createPokemon = async (data) => {
  const [newPokemon] = await Pokemon.findOrCreate({
    where: { name: data.name },
    defaults: {
      sprite: data.sprite,
      hp: data.hp,
      atk: data.atk,
      def: data.def,
      spd: data.spd,
      height: data.height,
      weight: data.weight,
    },
  });
  await newPokemon.addType(data.type);

  const createdPokemon = await Pokemon.findOne({
    where: { name: data.name },
    include: { model: Type, as: "type" },
  });

  const type = createdPokemon.type.map((e) => e.name);
  return { ...createdPokemon.dataValues, type };
};

module.exports = createPokemon;

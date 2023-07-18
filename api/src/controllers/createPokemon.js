const { Pokemon } = require("./../db");

const createPokemon = async (data) => {
  const [newPokemon] = await Pokemon.findOrCreate({
    where: { name: data.name },
    defaults: {
      img: data.imagen,
      hp: data.vida,
      atk: data.ataque,
      def: data.defensa,
      spd: data.velocidad,
      height: data.altura,
    },
  });
  return newPokemon;
};

module.exports = createPokemon;

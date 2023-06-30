const { Pokemon } = require("./../db");

const createPokemon = async (data) => {
  const [newPokemon] = await Pokemon.findOrCreate({
    where: { nombre: data.nombre },
    defaults: {
      imagen: data.imagen,
      vida: data.vida,
      ataque: data.ataque,
      defensa: data.defensa,
      velocidad: data.velocidad,
      peso: data.altura,
    },
  });
  return newPokemon;
};

module.exports = createPokemon;

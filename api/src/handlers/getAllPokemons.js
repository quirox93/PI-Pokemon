const { getAllPokemons } = require("../controllers");

const handlerGetAllPokemons = async (req, res) => {
  try {
    const pokemons = await getAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerGetAllPokemons;

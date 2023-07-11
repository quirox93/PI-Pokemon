const { getPokemonByIdOrName } = require("../controllers");

const handlerGetPokemonByName = async (req, res) => {
  try {
    const { name } = req.query;
    const pokemon = await getPokemonByIdOrName(name);
    res.status(200).json(pokemon);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerGetPokemonByName;

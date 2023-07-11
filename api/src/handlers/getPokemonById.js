const { getPokemonByIdOrName } = require("../controllers");

const handlerGetPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number(id)) return res.status(400).json({ error: "Valor invalido." });
    const pokemon = await getPokemonByIdOrName(id);
    res.status(200).json(pokemon);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerGetPokemonById;

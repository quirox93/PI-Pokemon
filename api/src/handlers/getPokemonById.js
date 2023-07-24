const { getPokemonById, getPokemonByUUID } = require("../controllers");
const isUUID =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
const handlerGetPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (isUUID.test(id)) {
      const pokemon = await getPokemonByUUID(id);
      return res.status(200).json(pokemon);
    }
    if (!Number(id)) return res.status(400).json({ error: "Valor invalido." });
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerGetPokemonById;

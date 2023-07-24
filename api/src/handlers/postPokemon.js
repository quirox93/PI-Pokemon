const { createPokemon } = require("../controllers");

const validatePost = (data) =>
  data.name && data.sprite && data.hp && data.atk && data.def && data.type.length;

const handlerPostPokemon = async (req, res) => {
  try {
    const data = req.body;
    if (!validatePost(data)) return res.status(400).json({ error: "Faltan datos." });

    const pokemons = await createPokemon(data);
    res.status(200).json(pokemons);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerPostPokemon;

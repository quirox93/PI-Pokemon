const createPokemon = require("../controllers/createPokemon");

const validatePost = (data) =>
  data.nombre &&
  data.imagen &&
  data.vida &&
  data.ataque &&
  data.defensa &&
  data.tipo;

const handlerPostPokemon = async (req, res) => {
  try {
    const data = req.body;
    if (!validatePost(data))
      return res.status(400).json({ error: "Faltan datos." });

    const pokemons = await createPokemon(data);
    res.status(200).json(pokemons);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerPostPokemon;

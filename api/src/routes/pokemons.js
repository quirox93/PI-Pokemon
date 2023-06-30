const getPokemon = require("./../controllers/getPokemons");
const createPokemon = require("./../controllers/createPokemon");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const pokemons = await getPokemon.byName(name);
      return res.status(200).json(pokemons);
    }

    const pokemons = await getPokemon.all();
    res.status(200).json(pokemons);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
});

router.get("/:idPokemon", async (req, res) => {
  try {
    const { idPokemon } = req.params;
    if (!Number(idPokemon))
      return res.status(400).json({ error: "Valor invalido." });

    const pokemon = await getPokemon.byId(idPokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
   
    if (!validatePost(data)) return res.status(400).json({ error: "Faltan datos." });
    const pokemons = await createPokemon(data);

    res.status(200).json(pokemons);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
});


const validatePost = (data) =>
  data.nombre &&
  data.imagen &&
  data.vida &&
  data.ataque &&
  data.defensa &&
  data.tipo;

module.exports = router;

const {
  getPokemonByName,
  getPokemonById,
  getPokemons,
} = require("./../controllers/getPokemons");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const pokemons = await getPokemonByName(name);
      return res.status(200).json(pokemons);
    }

    const pokemons = await getPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:idPokemon", async (req, res) => {
  try {
    const { idPokemon } = req.params;
    const pokemon = await getPokemonById(idPokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

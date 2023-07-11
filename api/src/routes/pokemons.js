const { handlerGetPokemon, handlerPostPokemon, handlerGetPokemonById } = require("../handlers");

const router = require("express").Router();

router.get("/", handlerGetPokemon);
router.get("/:id", handlerGetPokemonById);
router.post("/", handlerPostPokemon);

module.exports = router;

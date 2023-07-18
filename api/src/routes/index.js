const router = require("express").Router();
const pokemonsRoute = require("./pokemons.js");
const typesRoute = require("./types.js");

router.use("/pokemons", pokemonsRoute);
router.use("/types", typesRoute);

module.exports = router;

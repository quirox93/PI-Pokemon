const pokemonsRoute = require("./pokemons.js");
const typesRoute = require("./types.js");

const routes = (server) => {
  server.use("/pokemons", pokemonsRoute);
  server.use("/types", typesRoute);
};

module.exports = routes;

const axios = require("axios");
const pokeApi = "https://pokeapi.co/api/v2/pokemon";

const formatData = (data) => {
  const pokemonData = {
    nombre: data.name,
    altura: data.height,
    peso: data.weight,
    imagen: data.sprites.other.dream_world.front_default,
    animacion:
      data.sprites.versions["generation-v"]["black-white"]["animated"]
        .front_default,
  };
  return pokemonData;
};

const all = async () => {
  const { data } = await axios.get(pokeApi + "?limit=12&offset=0.");
  const getPokemon = (e) => byName(e.name);
  const allPokemons = data.results.map(getPokemon);
  const allData = await Promise.all(allPokemons);
  return allData;
};

const byId = async (idPokemon) => {
  const { data } = await axios.get(`${pokeApi}/${idPokemon}`);
  return formatData(data);
};

const byName = async (name) => {
  const { data } = await axios.get(`${pokeApi}/${name}`);

  return formatData(data);
};

module.exports = {
  all,
  byId,
  byName,
};

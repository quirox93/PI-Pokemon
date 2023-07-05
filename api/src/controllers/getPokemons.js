const axios = require("axios");
const pokeApi = "https://pokeapi.co/api/v2/pokemon";

const formatData = (data) => {
  const pokemonData = {
    id: data.id,
    nombre: data.name.split("-")[0],
    altura: data.height,
    peso: data.weight,
    vida: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    velocidad: data.stats[5].base_stat,
    imagen: data.sprites.front_default,
    animacion:
      data.sprites.versions["generation-v"]["black-white"]["animated"]
        .front_default,
    tipo: [data.types[0].type.name, data.types[1]?.type.name],
  };
  return pokemonData;
};

const all = async () => {
  const { data } = await axios.get(pokeApi + "?limit=20&offset=0.");
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

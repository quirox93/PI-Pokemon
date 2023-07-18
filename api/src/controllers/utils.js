module.exports = {
  pokeApi: "https://pokeapi.co/api/v2/",
  formatData: (data) => {
    const pokemonData = {
      id: data.id,
      name: data.name.split("-")[0],
      height: data.height,
      weight: data.weight,
      hp: data.stats[0].base_stat,
      atk: data.stats[1].base_stat,
      def: data.stats[2].base_stat,
      spd: data.stats[5].base_stat,
      sprite: data.sprites.front_default,
      gif: data.sprites.versions["generation-v"]["black-white"]["animated"].front_default,
      type: data.types.map((e) => e.type.name),
    };
    return pokemonData;
  },
};

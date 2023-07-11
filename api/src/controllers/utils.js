module.exports = {
  pokeApi: "https://pokeapi.co/api/v2/",
  formatData: (data) => {
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
      animacion: data.sprites.versions["generation-v"]["black-white"]["animated"].front_default,
      tipo: data.types.map((e) => e.type.name),
    };
    return pokemonData;
  },
};

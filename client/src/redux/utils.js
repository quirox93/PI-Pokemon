const functions = (state, payload) => {
  const filterByType = () => {
    const filterFn = ({ tipo }) => {
      const everyFunc = (e) => tipo.includes(e);
      const check = payload.every(everyFunc);
      return check;
    };

    return {
      filteredPokemons: state.allPokemons.filter(filterFn).sort(state.sortMode),
    };
  };

  const sortFunction = () => {
    return {
      sortMode: payload,
      filteredPokemons: state.filteredPokemons.sort(payload),
    };
  };

  return { sortFunction, filterByType };
};

export default functions;

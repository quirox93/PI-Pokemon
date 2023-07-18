const functions = (state, payload) => {
  const filterByType = () => {
    const filterFn = ({ type }) => {
      const everyFunc = (e) => type.includes(e);
      const check = payload.every(everyFunc);
      return check;
    };

    return {
      filteredPokemons: state.allPokemons.filter(filterFn).sort(state.sortMode),
      typesOn: payload,
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

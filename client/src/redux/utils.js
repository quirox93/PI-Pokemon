const SortFunc = {
  id: (a, b) => a.id - b.id,
  nameAsc: (a, b) => a.name.localeCompare(b.name),
  nameDesc: (a, b) => b.name.localeCompare(a.name),
  atkAsc: (a, b) => a.atk - b.atk,
  atkDesc: (a, b) => b.atk - a.atk,
};
const filter = (state, originOn, typesOn, sortOn) => {
  const typeFn = ({ type }) => {
    const everyFunc = (e) => type.includes(e);
    const check = typesOn.every(everyFunc);
    return check;
  };

  const originFn = ({ id }) => {
    if (originOn === "all") return true;
    return Number(id) ? originOn === "original" : originOn === "db";
  };

  return state.allPokemons.filter(typeFn).filter(originFn).sort(SortFunc[sortOn]);
};

const functions = (state, payload) => {
  const filterByType = () => {
    const updatedFilter = filter(state, state.originOn, payload, state.sortOn);
    return {
      filteredPokemons: updatedFilter,
      typesOn: payload,
    };
  };

  const filterByOrigin = () => {
    const updatedFilter = filter(state, payload, state.typesOn, state.sortOn);
    return {
      filteredPokemons: updatedFilter,
      originOn: payload,
    };
  };

  const sortFunction = () => {
    return {
      sortOn: payload,
      filteredPokemons: state.filteredPokemons.sort(SortFunc[payload]),
    };
  };

  return { sortFunction, filterByType, filterByOrigin };
};

export default functions;

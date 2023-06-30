export const GET_POKEMONS = "GET_POKEMONS";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

import axios from "axios";
const URL = import.meta.env.VITE_BACKEND_URL;

export const getAllPokemons = () => {
  const endpoint = URL + "/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      console.log(data);
      return dispatch({
        type: "GET_POKEMONS",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFav = (access, id) => {
  const endpoint = URL + "/rickandmorty/fav/" + access + "/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (ord) => {
  return { type: ORDER, payload: ord };
};

export default { getAllPokemons, removeFav, filterCards, orderCards };

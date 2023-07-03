export const GET_POKEMONS = "GET_POKEMONS";
export const REMOVE_FAV = "REMOVE_FAV";
export const UPDATE_STICK = "UPDATE_STICK";
export const UPDATE_WIDTH = "UPDATE_WIDTH";
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

export const updateStick = (payload) => {
  return { type: UPDATE_STICK, payload };
};
export const updateWidth = (payload) => {
  return { type: UPDATE_WIDTH, payload };
};

export default { getAllPokemons, updateStick, updateWidth };

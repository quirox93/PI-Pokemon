import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../../redux/actions";

const URL = import.meta.env.VITE_BACKEND_URL + "/pokemons";
const onlyLetters = /^[A-Za-z]{3,15}$/;
const imageUrlRegex = /\.(jpeg|jpg|png|gif|bmp)$/i;
const checkHeight = /^([1-9]|[1-9][0-9]|1[0-4][0-9]|150)$/;
const checkWeight = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)$/;
const checkStat = /^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
const validations = {
  name: (value) => (onlyLetters.test(value) ? "" : "Must be between 3 and 15 characters long"),
  sprite: (value) => (imageUrlRegex.test(value) ? "" : "Invalid image URL"),
  type: (value) => (value.length > 0 ? "" : "lightcoral"),
  height: (value) => (checkHeight.test(value) ? "" : "lightcoral"),
  weight: (value) => (checkWeight.test(value) ? "" : "lightcoral"),
  hp: (value) => (checkStat.test(value) ? "" : "lightcoral"),
  atk: (value) => (checkStat.test(value) ? "" : "lightcoral"),
  def: (value) => (checkStat.test(value) ? "" : "lightcoral"),
  spd: (value) => (checkStat.test(value) ? "" : "lightcoral"),
};
const defValues = {
  name: "",
  sprite: "",
  type: [],
  height: 1,
  weight: 1,
  hp: 1,
  atk: 1,
  def: 1,
  spd: 1,
};
const defErrors = {
  name: "",
  sprite: "",
  type: "",
  height: "",
  weight: "",
  hp: "",
  atk: "",
  def: "",
  spd: "",
};
const useValidations = (modalRef) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(defValues);

  const [errors, setErrors] = useState(defErrors);
  const [info, setInfo] = useState("");

  const handleChange = (event) => {
    const { name, value, pattern } = event.target;
    let isValid = false;
    if (Number(value) >= 0) isValid = new RegExp(pattern).test(Number(value));
    else isValid = new RegExp(pattern).test(value);
    if (!isValid && value !== "") return event.preventDefault();
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    const newErrors = { ...errors, [name]: validations[name](value) };
    setErrors(newErrors);
  };
  const handleMultiSelectChange = (event) => {
    const { name, selectedOptions, pattern } = event.target;
    const value = Array.from(selectedOptions, (option) => option.value);
    if (!new RegExp(pattern).test(value) && value !== []) return event.preventDefault();
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    const newErrors = { ...errors, [name]: validations[name](value) };
    setErrors(newErrors);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let canSubmit = true;
    const newErrors = {
      ...errors,
    };
    for (let e in values) {
      const error = validations[e](values[e]);
      if (error) canSubmit = false;
      newErrors[e] = error;
    }
    setErrors(newErrors);
    if (!canSubmit) return alert("Invalid or missing fields");
    postData();
  };
  const postData = async () => {
    try {
      setInfo(<h2>Loading...</h2>);
      const { data } = await axios.post(URL, values);
      dispatch(getAllPokemons());
      const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      setInfo(
        <>
          <h1>{`A wild ${capitalizedName} appears!`}</h1>
          <Link onClick={() => modalRef.current.close("cancel")} to={`/detail/${data.id}`}>
            <h2>See details</h2>
          </Link>
        </>
      );
    } catch (error) {
      setInfo(<h2>{error.message}</h2>);
    }
  };

  const handleClose = () => {
    setValues(defValues);
    setErrors(defErrors);
    setInfo("");
  };
  return { info, handleClose, handleSubmit, handleChange, handleMultiSelectChange, values, errors };
};

export default useValidations;

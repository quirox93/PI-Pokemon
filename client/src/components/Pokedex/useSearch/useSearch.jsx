import { useRef, useState } from "react";
import s from "./useSearch.module.css";
import searchIcon from "./../icons/searchIcon.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const URL = import.meta.env.VITE_BACKEND_URL + "/pokemons";
const useSearch = () => {
  const modalRef = useRef(null);
  const [inputSearch, setinputSearch] = useState("");
  const { width } = useSelector((state) => state);
  const [status, setStatus] = useState("");
  const handleOpenButton = () => {
    modalRef.current.showModal();
  };
  const handleClose = () => {
    setStatus("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (!inputSearch) return setStatus(<h1>Invalid name...</h1>);
    setinputSearch("");
    setStatus(<h2>Searching...</h2>);
    searchPokemon(inputSearch.toLowerCase());
  };

  const searchPokemon = async (name) => {
    try {
      const { data } = await axios.get(URL, {
        params: {
          name,
        },
      });
      const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

      setStatus(
        <>
          <h2>{`A wild ${capitalizedName} appears!`}</h2>
          <Link onClick={() => modalRef.current.close("cancel")} to={`/detail/${data.id}`}>
            <h3>See details</h3>
          </Link>
        </>
      );
    } catch (error) {
      if (error.response.status === 404) setStatus(<h1>Not founded</h1>);
      else setStatus(<h2>{error.message}</h2>);
    }
  };
  const handleInput = (event) => {
    const onlyStrings = new RegExp("^[A-Z]+$", "i");
    if (onlyStrings.test(event.target.value) || event.target.value == "")
      setinputSearch(event.target.value);
  };
  const searchModal = (
    <dialog
      style={{ width: width * 0.7, height: width * 0.8, fontSize: width / 20 }}
      onClose={handleClose}
      ref={modalRef}
    >
      <form className={s.form} method="dialog">
        <input onChange={handleInput} value={inputSearch} placeholder="Enter name" />
        <button onClick={handleSearch} value="search">
          Search
        </button>
        <button value="cancel">Cancel</button>
        {status}
      </form>
    </dialog>
  );

  const searchButton = (
    <>
      <circle
        className={s.icon + " cls-14"}
        cx={296.91}
        cy={505}
        r={17.38}
        onClick={handleOpenButton}
      />
      <image
        xlinkHref={searchIcon}
        x={296.91 - 12.5}
        y={505 - 12.5}
        width={25}
        height={25}
        onClick={handleOpenButton}
      />
    </>
  );

  return { searchModal, searchButton };
};

export default useSearch;

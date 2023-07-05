import Pokedex from "../../components/Pokedex/Pokedex";
import Cards from "../../components/Cards/Cards";
import Opciones from "../../components/Opciones/Opciones";
import s from "./Home.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import SticksControl from "../../components/SticksControl/SticksControl";
import MiniPantalla from "../../components/MiniPantalla/MiniPantalla";

const Home = ({ opciones }) => {
  const allPokemons = useSelector((state) => state.allPokemons);
  const [page, setPage] = useState(1);
  const handleLeftClick = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleRightClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={s.container}>
      <Pokedex />
      {opciones ? (
        <Opciones />
      ) : (
        <Cards allPokemons={allPokemons.slice(12 * (page - 1), 12 * page)} />
      )}
      <SticksControl
        handleRightClick={handleRightClick}
        handleLeftClick={handleLeftClick}
      />
      <MiniPantalla text={opciones ? "Opciones" : "Página " + page} />
    </div>
  );
};

export default Home;

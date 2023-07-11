import Pokedex from "../../components/Pokedex/Pokedex";
import Cards from "../../components/Cards/Cards";
import Options from "../../components/Options/Options";
import s from "./Home.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import MiniScreen from "../../components/MiniScreen/MiniScreen";

const Home = ({ options }) => {
  const { filteredPokemons } = useSelector((state) => state);

  const [page, setPage] = useState(1);
  const handleLeftClick = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleRightClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={s.container}>
      <Pokedex handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} />

      {options ? (
        <Options />
      ) : (
        <Cards allPokemons={filteredPokemons.slice(12 * (page - 1), 12 * page)} />
      )}

      <MiniScreen text={options ? "Opciones" : "Página " + page} />
    </div>
  );
};

export default Home;

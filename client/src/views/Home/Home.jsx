import Pokedex from "../../components/Pokedex/Pokedex";
import Cards from "../../components/Cards/Cards";
import s from "./Home.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import MiniScreen from "../../components/MiniScreen/MiniScreen";

const Home = () => {
  const { filteredPokemons } = useSelector((state) => state);

  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(filteredPokemons.length / 12);
  const handleLeftClick = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleRightClick = () => {
    if (page === lastPage) return;
    const actualPage = page + 1;
    setPage(actualPage);
  };

  return (
    <div className={s.container}>
      <Pokedex handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} />

      <Cards allPokemons={filteredPokemons.slice(12 * (page - 1), 12 * page)} />

      <MiniScreen text={`Page ${page} of ${lastPage}`} />
    </div>
  );
};

export default Home;

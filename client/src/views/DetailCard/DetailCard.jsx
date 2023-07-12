import { useSelector } from "react-redux";
import Pokedex from "./../../components/Pokedex/Pokedex";
import s from "./DetailCard.module.css";
import background from "./../../typeBackground";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MiniScreen from "../../components/MiniScreen/MiniScreen";
const URL = import.meta.env.VITE_BACKEND_URL;

const DetailCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [actualId, setActualId] = useState(Number(id));

  const width = useSelector((state) => state.width);
  const [pokemon, setPokemon] = useState(false);
  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await axios.get(URL + "/pokemons/" + actualId);
      setPokemon(data);
    };
    getPokemon();
  }, [actualId]);

  const handleLeftClick = () => {
    const n = actualId - 1;
    setActualId(n);
    navigate("/detail/" + n);
  };
  const handleRightClick = () => {
    const n = actualId + 1;
    setActualId(n);
    navigate("/detail/" + n);
  };
  useEffect;
  return (
    <div style={{ fontSize: width / 28 }} className={s.container}>
      <Pokedex handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      <div className={s.cardsContainer} style={{ width: width, height: width }}>
        {pokemon && (
          <>
            <div className={s.background}>
              <img src={background[pokemon.type[0]]} />
              <div className={s.stats}>
                <label>VID {pokemon.hp}</label>
                <label>ATQ {pokemon.atk}</label>
                <label>{pokemon.height / 10} m</label>
                <label>DEF {pokemon.def}</label>
                <label>VEL {pokemon.spd}</label>
                <label>{pokemon.weight / 10} kg</label>
              </div>
            </div>

            {pokemon.id === actualId && (
              <img src={pokemon.gif || pokemon.sprite} className={s.sprite} />
            )}
          </>
        )}
      </div>
      <MiniScreen text={"#" + actualId} />
    </div>
  );
};

export default DetailCard;

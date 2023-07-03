import { useSelector } from "react-redux";
import Pokedex from "./../../components/Pokedex/Pokedex";
import s from "./DetailCard.module.css";
import background from "./../../utils/allBackgrounds";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SticksControl from "../../components/SticksControl/SticksControl";
import MiniPantalla from "../../components/MiniPantalla/MiniPantalla";
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
      <Pokedex />
      <div className={s.cardsContainer} style={{ width: width, height: width }}>
        {pokemon && (
          <>
            <div className={s.background}>
              <img src={background[pokemon.tipo[0]]} />
              <div className={s.stats}>
                <label name="vida">VID {pokemon.vida}</label>
                <label name="ataque">ATQ {pokemon.ataque}</label>
                <label name="altura">{pokemon.altura / 10} m</label>
                <label name="defensa">DEF {pokemon.defensa}</label>
                <label name="velocidad">VEL {pokemon.velocidad}</label>
                <label name="peso">{pokemon.peso / 10} kg</label>
              </div>
            </div>

            {pokemon.id === actualId && (
              <img
                src={pokemon.animacion || pokemon.imagen}
                className={s.sprite}
              />
            )}
          </>
        )}
      </div>

      <SticksControl
        handleRightClick={handleRightClick}
        handleLeftClick={handleLeftClick}
      />
      <MiniPantalla text={"#" + actualId} />
    </div>
  );
};

export default DetailCard;

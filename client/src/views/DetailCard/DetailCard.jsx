import { useSelector } from "react-redux";
import Pokedex from "./../../components/Pokedex/Pokedex";
import s from "./DetailCard.module.css";
import background from "./../../typeBackground";
import typesIcon from "./../../textTypesIcon";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MiniScreen from "../../components/MiniScreen/MiniScreen";
const URL = import.meta.env.VITE_BACKEND_URL;

const DetailCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { width, filteredPokemons: allPokemons } = useSelector((state) => state);
  const actualPos = allPokemons.findIndex((e) => e.id == id);
  const [pos, setPos] = useState(actualPos);
  const [backgroundStyle, setBackgroundStyle] = useState(false);
  const [spriteStyle, setSpriteStyle] = useState(false);
  const [pokemon, setPokemon] = useState(false);
  useEffect(() => {
    if (!allPokemons.length) return;
    const getPokemon = async () => {
      const { data } = await axios.get(URL + "/pokemons/" + id);
      setPokemon(data);
    };
    const actualPos = allPokemons.findIndex((e) => e.id == id);
    setPos(actualPos);
    getPokemon();
  }, [allPokemons, id]);

  const handleLeftClick = () => {
    const n = pos - 1;
    if (n < 0) return;
    navigate("/detail/" + allPokemons[n].id);
    setSpriteStyle(false);
  };
  const handleRightClick = () => {
    const n = pos + 1;
    if (n > allPokemons.length) return;
    navigate("/detail/" + allPokemons[n].id);
    setSpriteStyle(false);
  };

  const handleBackgroundLoad = () => {
    setBackgroundStyle(true);
  };
  const handleSpriteLoad = () => {
    setSpriteStyle(true);
  };
  const displayBackground = backgroundStyle ? "flex" : "none";
  const displaySprite = spriteStyle && backgroundStyle ? "flex" : "none";
  const displayLoading = backgroundStyle && spriteStyle ? "none" : "flex";
  const capitalizedName = pokemon.name
    ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    : "Loading...";
  return (
    <div style={{ fontSize: width / 28 }} className={s.container}>
      <Pokedex handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      <div className={s.cardsContainer} style={{ width: width, height: width }}>
        <div className={s.background}>
          <div style={{ display: displayLoading }} className={s.ldsRipple}>
            <div></div>
            <div></div>
          </div>
          {pokemon && (
            <>
              <img
                style={{ display: displayBackground }}
                name="background"
                onLoad={handleBackgroundLoad}
                src={background[pokemon.type[0]]}
              />
              <div style={{ display: displayBackground }} className={s.stats}>
                <label>HP {pokemon.hp}</label>
                <label>ATK {pokemon.atk}</label>
                <label>{pokemon.height / 10} m</label>
                <label>DEF {pokemon.def}</label>
                <label>SPD {pokemon.spd}</label>
                <label>{pokemon.weight / 10} kg</label>
              </div>
              <div className={s.types}>
                {pokemon.type.map((e) => {
                  return <img key={e} src={typesIcon[e]}></img>;
                })}
              </div>
              <img
                style={{ display: displaySprite }}
                name="sprite"
                onLoad={handleSpriteLoad}
                src={pokemon.gif || pokemon.sprite}
                className={s.sprite}
              />
            </>
          )}
        </div>
      </div>
      <MiniScreen text={`${pos + 1} of ${allPokemons.length} ${capitalizedName}`} />
    </div>
  );
};

export default DetailCard;

/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import s from "./Cards.module.css";
import { Link } from "react-router-dom";
import typeIcon from "./../../typesIcons";

const Cards = (props) => {
  const width = useSelector((state) => state.width);
  const fontSize = width / 38 + "px";

  const mapPokemons = props.allPokemons.map((e, i) => {
    const typeIcon1 = typeIcon[e.type[0]];
    const typeIcon2 = typeIcon[e.type[1]];
    return (
      <Link style={{ fontSize }} to={"/detail/" + e.id} key={i}>
        <img src={e.gif || e.sprite}></img>
        <div className={s.rightContainer}>
          <p className={s.name}>{e.name}</p>
          <div className={s.icons}>
            <img src={typeIcon1} />
            {typeIcon2 && <img src={typeIcon2} />}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className={s.cardsContainer} style={{ width: width, height: width }}>
      <div className={s.pantalla}>{mapPokemons.length ? mapPokemons : mapPokemons}</div>
    </div>
  );
};

export default Cards;

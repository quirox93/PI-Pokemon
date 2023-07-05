/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import s from "./Cards.module.css";
import { Link } from "react-router-dom";
import typeIcon from "../../utils/typesIcon";

const Cards = (props) => {
  const width = useSelector((state) => state.width);
  const fontSize = width / 38 + "px";

  const mapPokemons = props.allPokemons.map((e, i) => {
    const typeIcon1 = typeIcon[e.tipo[0]];
    const typeIcon2 = typeIcon[e.tipo[1]];
    return (
      <Link style={{ fontSize }} to={"/detail/" + e.id} key={i}>
        <img src={e.animacion || e.imagen}></img>
        <div className={s.rightContainer}>
          <p className={s.name}>{e.nombre}</p>
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
      <div className={s.pantalla}>
        {mapPokemons.length ? mapPokemons : mapPokemons}
      </div>
    </div>
  );
};

export default Cards;

/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import s from "./Cards.module.css";
import { Link } from "react-router-dom";
import typeColor from "../../utils/typesColor";

const Cards = (props) => {
  const width = useSelector((state) => state.width);
  const fontSize = width / 38 + "px";

  const mapPokemons = props.allPokemons.map((e, i) => {
    let bColor = typeColor[e.tipo[0]];
    if (e.tipo[1])
      bColor = `linear-gradient(90deg, ${typeColor[e.tipo[0]]} , ${
        typeColor[e.tipo[1]]
      } )`;
    return (
      <Link
        style={{ fontSize, boxShadow: "0 0 0 0.1em " + bColor }}
        to={"/detail/" + e.id}
        key={i}
      >
        <img src={e.animacion || e.imagen}></img>
        <p>{e.nombre}</p>
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

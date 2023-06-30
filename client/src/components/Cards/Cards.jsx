import s from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
const Cards = () => {
  const allPokemons = useSelector((state) => state.allPokemons).slice(0, 12);
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.clientWidth);
  }, [ref.current?.clientWidth]);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const fontSize = width / 22 + "px";

  const mapPokemons = allPokemons.map((e, i) => {
    return (
      <article style={{ fontSize }} key={i}>
        <img src={e.animacion}></img>
        <label>{e.nombre}</label>
      </article>
    );
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <div ref={ref} className={s.cardContainer}>
      {mapPokemons.length ? mapPokemons : mapPokemons}
    </div>
  );
};

export default Cards;

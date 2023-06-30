import Cards from "../Cards/Cards";
import s from "./Home.module.css";
import Pokedex from "./../Pokedex/Pokedex";
import pokedexMarco from "./../../../public/pokedexMarco.png";
import fuego from "./../../../public/fuego.png";
const Home = () => {
  return (
    <div >
      <div className={s.container}>
        <Pokedex />
      </div>
    </div>
  );
};
/*
        <img src={pokedex} className={s.pokedex}></img>
        <img className={s.pantalla} src={fuego} />
        <Cards />
        <img className={s.marco} src={pokedexMarco} />
        <input className={s.input} placeholder="Ingrese el nombre"></input>
        <button className={s.buscar}>Buscar</button>
         */
export default Home;

import { Link } from "react-router-dom";
import s from "./Landing.module.css";
import btn from "./png";
const Landing = () => {
  return (
    <div className={s.background}>
      <h1>VIRTUAL POKEDEX</h1>
      <div className={s.guide}>
        <h2>How to use Pokedex</h2>
        <div className={s.info}>
          <img src={btn.homeButton}></img>
          <p>Home button</p>
        </div>
        <div className={s.info}>
          <img src={btn.searchButton}></img>
          <p>Search by name</p>
        </div>
        <div className={s.info}>
          <img src={btn.formButton}></img>
          <p>Add new Pokemon</p>
        </div>
        <div className={s.info}>
          <img src={btn.optionsButton}></img>
          <p>Options menu</p>
        </div>
        <Link to="/home">
          <button>ENTER</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

import Pokedex from "../../components/Pokedex/Pokedex";
import { useDispatch, useSelector } from "react-redux";
import s from "./Options.module.css";
import { filterByType } from "../../redux/actions";
import MiniScreen from "../../components/MiniScreen/MiniScreen";

const Options = () => {
  const { typesOn, types, width } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleCheckBox = (e) => {
    if (e.target.checked) dispatch(filterByType([...typesOn, e.target.id]));
    else dispatch(filterByType(typesOn.filter((el) => el !== e.target.id)));
  };
  const mapTypes = types.slice(0, 18).map((e, i) => (
    <div key={i} className={s.customCheckBoxHolder}>
      <input
        onChange={handleCheckBox}
        id={e}
        type="checkbox"
        className={s.customCheckBoxInput}
        checked={typesOn.includes(e) ? "on" : ""}
      ></input>
      <label htmlFor={e} className={s.customCheckBoxWrapper}>
        <div className={s.customCheckBox}>
          <div className={s.inner}>{e}</div>
        </div>
      </label>
    </div>
  ));

  const handleLeftClick = () => {};
  const handleRightClick = () => {};
  return (
    <div style={{ fontSize: width / 28 }} className={s.container}>
      <Pokedex handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      <div className={s.optionsContainer} style={{ width: width, height: width }}>
        <div className={s.background}>
          <section className={s.section}>
            <div className={s.allTypes}>{mapTypes}</div>
          </section>
          <section style={{ display: "none" }} className={s.section}>
            <div className={s.allTypes}>{mapTypes}</div>
          </section>
          <div className={s.tabs}>
            <button>Filtros</button>
            <button>Orden</button>
            <button>Aplicar</button>
          </div>
        </div>
      </div>
      <MiniScreen text={"OPCIONES"} />
    </div>
  );
};

export default Options;

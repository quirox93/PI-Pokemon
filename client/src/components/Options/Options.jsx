import { useSelector } from "react-redux";
import s from "./Options.module.css";

const Options = () => {
  const { types, width } = useSelector((state) => state);

  const mapTypes = types.slice(0, 18).map((e, i) => (
    <div key={i} className={s.customCheckBoxHolder}>
      <input id={i} type="checkbox" className={s.customCheckBoxInput}></input>
      <label htmlFor={i} className={s.customCheckBoxWrapper}>
        <div className={s.customCheckBox}>
          <div className={s.inner}>{e}</div>
        </div>
      </label>
    </div>
  ));

  return (
    <div className={s.container} style={{ fontSize: width / 28, width: width, height: width }}>
      <div className={s.background}>
        <section className={s.filterSection}>
          Filtrar por tipo
          <div className={s.allTypes}>{mapTypes}</div>
        </section>
        <section className={s.sortSection}>
          <label>Ordenar por</label>
        </section>
      </div>
    </div>
  );
};

export default Options;

import { useDispatch, useSelector } from "react-redux";
import s from "./Options.module.css";
import { filterByType } from "../../redux/actions";

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

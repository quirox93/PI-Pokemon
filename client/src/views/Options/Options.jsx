import Pokedex from "../../components/Pokedex/Pokedex";
import { useDispatch, useSelector } from "react-redux";
import s from "./Options.module.css";
import { filterByType } from "../../redux/actions";
import MiniScreen from "../../components/MiniScreen/MiniScreen";
import { useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const radioButtons = (
    <div className={s.radioInputs}>
      <label className={s.radio}>
        <input
          type="radio"
          name="radio"
          value="All"
          onChange={handleOptionChange}
          checked={selectedOption === "All"}
        />
        <span className={s.name}>All</span>
      </label>
      <label className={s.radio}>
        <input
          type="radio"
          name="radio"
          value="Created"
          onChange={handleOptionChange}
          checked={selectedOption === "Created"}
        />
        <span className={s.name}>Created</span>
      </label>

      <label className={s.radio}>
        <input
          type="radio"
          name="radio"
          value="Original"
          onChange={handleOptionChange}
          checked={selectedOption === "Original"}
        />
        <span className={s.name}>Original</span>
      </label>
    </div>
  );

  const handleLeftClick = () => {};
  const handleRightClick = () => {};
  return (
    <div style={{ fontSize: width / 28 }} className={s.container}>
      <Pokedex handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      <div className={s.optionsContainer} style={{ width: width, height: width }}>
        <div className={s.background}>
          <section className={s.section}>
            <div className={s.allTypes}>{mapTypes}</div>
            {radioButtons}
          </section>
          <section style={{ display: "none" }} className={s.section}>
            <div className={s.allTypes}>{mapTypes}</div>
          </section>
          <div className={s.tabs}>
            <button>Filter</button>
            <button>Created</button>
            <button>Order</button>
          </div>
        </div>
      </div>
      <MiniScreen text={"OPCIONES"} />
    </div>
  );
};

export default Options;

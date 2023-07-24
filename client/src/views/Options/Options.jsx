import Pokedex from "../../components/Pokedex/Pokedex";
import { useDispatch, useSelector } from "react-redux";
import s from "./Options.module.css";
import { filterByOrigin, filterByType, sortPokemons } from "../../redux/actions";
import MiniScreen from "../../components/MiniScreen/MiniScreen";
import { useState } from "react";

const Options = () => {
  const { typesOn, sortOn, originOn, types, width } = useSelector((state) => state);

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

  const handleOriginChange = (event) => {
    dispatch(filterByOrigin(event.target.value));
  };
  const pokemonButtons = (
    <div className={s.radioInputs}>
      <label className={s.radio}>
        <input
          type="radio"
          name="radio"
          value="all"
          onChange={handleOriginChange}
          checked={originOn === "all" ? "on" : ""}
        />
        <span className={s.name}>All</span>
      </label>
      <label className={s.radio}>
        <input
          type="radio"
          name="radio"
          value="db"
          onChange={handleOriginChange}
          checked={originOn === "db" ? "on" : ""}
        />
        <span className={s.name}>Database</span>
      </label>

      <label className={s.radio}>
        <input
          type="radio"
          name="radio"
          value="original"
          onChange={handleOriginChange}
          checked={originOn === "original" ? "on" : ""}
        />
        <span className={s.name}>Original</span>
      </label>
    </div>
  );
  const handleOrderOption = (event) => {
    dispatch(sortPokemons(event.target.value));
  };
  const orderButtons = (
    <div className={s.radioInputs}>
      <label className={s.radio}>
        <input
          type="radio"
          name="orderRadio"
          value="id"
          onChange={handleOrderOption}
          checked={sortOn === "id" ? "on" : ""}
        />
        <span className={s.name}>ID</span>
      </label>
      <label className={s.radio}>
        <input
          type="radio"
          name="orderRadio"
          value="nameAsc"
          onChange={handleOrderOption}
          checked={sortOn === "nameAsc" ? "on" : ""}
        />
        <span className={s.name}>Name↑</span>
      </label>

      <label className={s.radio}>
        <input
          type="radio"
          name="orderRadio"
          value="nameDesc"
          onChange={handleOrderOption}
          checked={sortOn === "nameDesc" ? "on" : ""}
        />
        <span className={s.name}>Name↓</span>
      </label>
      <label className={s.radio}>
        <input
          type="radio"
          name="orderRadio"
          value="atkAsc"
          onChange={handleOrderOption}
          checked={sortOn === "atkAsc" ? "on" : ""}
        />
        <span className={s.name}>ATK↑</span>
      </label>

      <label className={s.radio}>
        <input
          type="radio"
          name="orderRadio"
          value="atkDesc"
          onChange={handleOrderOption}
          checked={sortOn === "atkDesc" ? "on" : ""}
        />
        <span className={s.name}>ATK↓</span>
      </label>
    </div>
  );
  const tabContent = {
    Pokemons: pokemonButtons,
    Filter: <div className={s.allTypes}>{mapTypes}</div>,
    Order: orderButtons,
  };
  const [activeTab, setActiveTab] = useState("Pokemons");
  const handleOptionChange = (event) => {
    setActiveTab(event.target.value);
  };
  const tabsButtons = (
    <div className={s.radioInputs}>
      <label className={s.radio}>
        <input
          type="radio"
          name="radioTabs"
          value="Pokemons"
          onChange={handleOptionChange}
          checked={activeTab === "Pokemons"}
        />
        <span className={s.name}>Pokemons</span>
      </label>
      <label className={s.radio}>
        <input
          type="radio"
          name="radioTabs"
          value="Filter"
          onChange={handleOptionChange}
          checked={activeTab === "Filter"}
        />
        <span className={s.name}>Filter</span>
      </label>

      <label className={s.radio}>
        <input
          type="radio"
          name="radioTabs"
          value="Order"
          onChange={handleOptionChange}
          checked={activeTab === "Order"}
        />
        <span className={s.name}>Order</span>
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
          <section className={s.section}>{tabContent[activeTab]}</section>
          <div className={s.tabs}>{tabsButtons}</div>
        </div>
      </div>
      <MiniScreen text={"OPCIONES"} />
    </div>
  );
};

export default Options;

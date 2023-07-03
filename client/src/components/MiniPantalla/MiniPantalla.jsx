/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import s from "./MiniPantalla.module.css";

const MiniPantalla = ({ text }) => {
  const width = useSelector((state) => state.width);

  return (
    <div style={{ fontSize: width / 28 }} className={s.info}>
      <label>{text}</label>
    </div>
  );
};

export default MiniPantalla;

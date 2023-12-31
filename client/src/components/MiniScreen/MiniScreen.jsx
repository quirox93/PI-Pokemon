/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import s from "./MiniScreen.module.css";

const MiniScreen = ({ text }) => {
  const width = useSelector((state) => state.width);

  return (
    <div style={{ fontSize: width / 28, width: width, height: width }} className={s.container}>
      <label>{text}</label>
    </div>
  );
};

export default MiniScreen;

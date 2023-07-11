import { useSelector } from "react-redux";
import s from "./Options.module.css";

const Options = () => {
  const width = useSelector((state) => state.width);
  return <div className={s.container} style={{ width: width, height: width }}></div>;
};

export default Options;

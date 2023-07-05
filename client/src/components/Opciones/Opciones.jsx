import { useSelector } from "react-redux";
import s from "./Opciones.module.css";

const Opciones = () => {
  const width = useSelector((state) => state.width);
  return (
    <div className={s.container} style={{ width: width, height: width }}></div>
  );
};

export default Opciones;

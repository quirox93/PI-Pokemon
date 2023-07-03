/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import s from "./SticksControl.module.css";
import { updateStick } from "../../redux/actions";

const SticksControl = ({ handleLeftClick, handleRightClick }) => {
  const width = useSelector((state) => state.width);

  const dispatch = useDispatch();

  return (
    <div className={s.gridStick} style={{ width: width, height: width }}>
      <div
        onMouseEnter={() => dispatch(updateStick(1))}
        onMouseLeave={() => dispatch(updateStick(0))}
        className={s.leftStick}
        onClick={handleLeftClick}
      ></div>
      <div
        onMouseEnter={() => dispatch(updateStick(2))}
        onMouseLeave={() => dispatch(updateStick(0))}
        className={s.rightStick}
        onClick={handleRightClick}
      ></div>
    </div>
  );
};

export default SticksControl;

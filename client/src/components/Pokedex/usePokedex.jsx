import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateWidth } from "../../redux/actions";
import { Link } from "react-router-dom";
import homeIcon from "./home.png";
import optionsIcon from "./options.png";
const usePokedex = (props, s) => {
  const { handleRightClick, handleLeftClick } = props;

  const ref = useRef(null);
  const stickRef = useRef(null);
  const dispatch = useDispatch();
  const setWidth = (width) => {
    dispatch(updateWidth(width));
  };
  useLayoutEffect(() => {
    setWidth(ref.current?.clientWidth);
  }, [ref.current?.clientWidth]);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current?.clientWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const optionsButton = (
    <Link to={"/home/options"}>
      <ellipse cx={325.58} cy={398.56} className="cls-7" rx={12.66} ry={12.69} />
      <image
        xlinkHref={optionsIcon} // Reemplaza con la ruta de tu ícono PNG o SVG
        x={325.58 - 10} // Posición en el eje X del ícono (cx - radio del círculo)
        y={398.56 - 10} // Posición en el eje Y del ícono (cy - radio del círculo)
        width={20} // Ancho del ícono (2 * radio del círculo)
        height={20} // Altura del ícono (2 * radio del círculo)
        className={s.optionsIcon}
      />
    </Link>
  );
  const homeButton = (
    <Link to={"/home"}>
      <circle
        cx={296.91}
        cy={450.71}
        r={17.38}
        className="cls-14"
        transform="rotate(-67.5 296.907 450.714)"
      />
      <image
        xlinkHref={homeIcon} // Reemplaza con la ruta de tu ícono PNG o SVG
        x={296.91 - 12.5} // Posición en el eje X del ícono (cx - radio del círculo)
        y={450.71 - 12.5} // Posición en el eje Y del ícono (cy - radio del círculo)
        width={25} // Ancho del ícono (2 * radio del círculo)
        height={25} // Altura del ícono (2 * radio del círculo)
        className={s.homeIcon}
      />
    </Link>
  );

  const searchButton = (
    <Link to={"/home"}>
      <circle
        cx={296.91}
        cy={505}
        r={17.38}
        className="cls-14"
      />
      <image
        xlinkHref={homeIcon} // Reemplaza con la ruta de tu ícono PNG o SVG
        x={296.91 - 12.5} // Posición en el eje X del ícono (cx - radio del círculo)
        y={450.71 - 12.5} // Posición en el eje Y del ícono (cy - radio del círculo)
        width={25} // Ancho del ícono (2 * radio del círculo)
        height={25} // Altura del ícono (2 * radio del círculo)
        className={s.homeIcon}
      />
    </Link>
  );

  const [stickStyle, setStickStyle] = useState("");
  const mouseHandler = (event) => {
    const svgRect = stickRef.current.getBoundingClientRect();
    const svgCenterX = svgRect.left + svgRect.width / 2;
    const svgCenterY = svgRect.top + svgRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    let style = "";
    if (mouseY < svgCenterY * 0.97) style = s.upStickOn;

    if (mouseX <= svgCenterX * 0.98) style = s.leftStickOn;

    if (mouseX > svgCenterX * 1.015) style = s.rightStickOn;

    if (mouseY > svgCenterY * 1.025) style = s.downStickOn;
    setStickStyle(style);
  };

  const mouseLeaveHandler = () => {
    setStickStyle("");
  };
  const clickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    if (stickStyle === s.rightStickOn) handleRightClick();
    if (stickStyle === s.leftStickOn) handleLeftClick();
  };
  const sticks = (
    <g>
      <path
        ref={stickRef}
        onMouseMove={mouseHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={clickHandler}
        d="M529.15 469.38H506.5v-22.64a1.74 1.74 0 0 0-1.73-1.74h-17.34a1.74 1.74 0 0 0-1.74 1.74v22.64h-22.64a1.74 1.74 0 0 0-1.74 1.74v17.34a1.73 1.73 0 0 0 1.74 1.73h22.64v22.65a1.74 1.74 0 0 0 1.74 1.74h17.34a1.74 1.74 0 0 0 1.73-1.74v-22.65h22.65a1.73 1.73 0 0 0 1.74-1.73v-17.34a1.74 1.74 0 0 0-1.74-1.74Z"
        className={`${stickStyle} ${s.sticks} cls-14`}
      />
    </g>
  );
  return { ref, sticks, optionsButton, homeButton, searchButton };
};

export default usePokedex;

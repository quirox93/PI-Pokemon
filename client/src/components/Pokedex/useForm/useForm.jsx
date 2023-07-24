import { useRef } from "react";
import s from "./useForm.module.css";
import useValidations from "./useValidations";
import { useSelector } from "react-redux";
import formIcon from "./../icons/formIcon.svg";
const useForm = () => {
  const modalRef = useRef(null);
  const { width, types } = useSelector((state) => state);

  const handleOpenButton = () => {
    modalRef.current.showModal();
  };

  const { info, handleClose, handleSubmit, handleChange, handleMultiSelectChange, values, errors } =
    useValidations(modalRef);
  const typesMap = types.map((e, i) => {
    return (
      <option key={e} value={i + 1}>
        {e}
      </option>
    );
  });

  const form = (
    <dialog
      style={{ width: width * 0.7, height: width * 1.3, fontSize: width / 20 }}
      onClose={handleClose}
      ref={modalRef}
      id="formModal"
    >
      <form className={s.form} method="dialog">
        {info ? (
          info
        ) : (
          <>
            <h3>Who is that Pokémon?</h3>
            <div>
              <input
                placeholder="Name"
                pattern="^[A-Za-z]{1,15}$"
                name="name"
                value={values.name}
                onChange={handleChange}
              ></input>
              <p>{errors.name}</p>
            </div>
            <div>
              <input
                placeholder="Sprite URL"
                pattern="^[\s\S]*$"
                name="sprite"
                value={values.sprite}
                onChange={handleChange}
              ></input>
              <p>{errors.sprite}</p>
            </div>
            <div className={s.select}>
              <label>Type</label>
              <select
                style={{ backgroundColor: errors.type }}
                name="type"
                multiple
                onChange={handleMultiSelectChange}
              >
                {typesMap}
              </select>
            </div>
            <div className={s.stats}>
              <label>Height (dm)</label>
              <input
                style={{ backgroundColor: errors.height }}
                type="number"
                placeholder="1-150"
                pattern="^([1-9]|[1-9][0-9]|1[0-4][0-9]|150)$"
                name="height"
                value={values.height}
                onChange={handleChange}
              ></input>
              <label>Weight (dg)</label>
              <input
                style={{ backgroundColor: errors.weight }}
                placeholder="1-10000"
                pattern="^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)$"
                name="weight"
                value={values.weight}
                onChange={handleChange}
              ></input>
              <label>HP</label>
              <input
                style={{ backgroundColor: errors.hp }}
                placeholder="1-255"
                pattern="^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                name="hp"
                value={values.hp}
                onChange={handleChange}
              ></input>
              <label>ATK</label>
              <input
                style={{ backgroundColor: errors.atk }}
                placeholder="1-255"
                pattern="^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                name="atk"
                value={values.atk}
                onChange={handleChange}
              ></input>
              <label>DEF</label>
              <input
                style={{ backgroundColor: errors.def }}
                placeholder="1-255"
                pattern="^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                name="def"
                value={values.def}
                onChange={handleChange}
              ></input>
              <label>SPD</label>
              <input
                style={{ backgroundColor: errors.spd }}
                placeholder="1-255"
                pattern="^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                name="spd"
                value={values.spd}
                onChange={handleChange}
              ></input>
            </div>
            <button value="cancel">Cancel</button>
            <button onClick={handleSubmit} value="submit">
              Add
            </button>
          </>
        )}
        {info && <button value="cancel">Close</button>}
      </form>
    </dialog>
  );

  const formButton = (
    <>
      <circle
        className={`${s.icon} ${s.formButton}`}
        onClick={handleOpenButton}
        cx={301.61}
        cy={82.72}
        r={24.16}
        style={{
          fill: "#00aeef",
          stroke: "#231f20",
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
      <image
        xlinkHref={formIcon} // Reemplaza con la ruta de tu ícono PNG o SVG
        x={301.61 - 12.5} // Posición en el eje X del ícono (cx - radio del círculo)
        y={82.72 - 12.5} // Posición en el eje Y del ícono (cy - radio del círculo)
        width={25} // Ancho del ícono (2 * radio del círculo)
        height={25} // Altura del ícono (2 * radio del círculo)
      />
    </>
  );
  return { form, formButton };
};

export default useForm;

import s from "./Pokedex.module.css";
import usePokedex from "./usePokedex";
import useForm from "./useForm/useForm";
import useSearch from "./useSearch/useSearch";

const Pokedex = (props) => {
  //Hook personalizado que maneja funcionalidades de la pokedex
  const { ref, sticks, optionsButton, homeButton } = usePokedex(props, s);
  const { form, formButton } = useForm();
  const { searchModal, searchButton } = useSearch();
  return (
    <>
      {form}
      {searchModal}
      <svg
        ref={ref}
        className={s.pokedexSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="200 0 400 600"
      >
        <defs>
          <style>
            {
              ".cls-11{fill:none}.cls-13,.cls-2{fill:#231f20}.cls-11,.cls-13,.cls-14,.cls-7{stroke:#231f20;stroke-miterlimit:10;stroke-width:2px}.cls-18,.cls-7{fill:#ed1c24}.cls-14{fill:#58595b}"
            }
          </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_4" data-name="Layer 4">
            <path
              d="M0 0h800v600H0z"
              style={{
                fill: "none",
              }}
            />
            <path
              d="M533.25 38.5h-257.5a20 20 0 0 0-15.91 7.81c-6.47 6.47-13.34 18-13.34 25.6v467.18c0 11.31 11 22.41 22.25 22.41h255.5c7.77 0 17.73-7.68 23.66-15.34a20.5 20.5 0 0 0 4.9-8.83 14.42 14.42 0 0 0 .69-4.24V58.91a20.35 20.35 0 0 0-20.25-20.41Z"
              className="cls-2"
            />
            <path
              d="m285 43.54-12.29 1c-8.42 0-21.25 18.9-21.25 27.41v467.14c0 8.51 8.83 17.41 17.25 17.41h255.5c8.42 0 24.25-14.9 24.25-23.41V58.91a15.33 15.33 0 0 0-15.21-15.41"
              style={{
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
                fill: "#b0282f",
              }}
            />
            <path
              d="M533.25 43.5h-257.5a15.33 15.33 0 0 0-15.25 15.41v473.18a15.33 15.33 0 0 0 15.25 15.41h257.5a15.33 15.33 0 0 0 15.25-15.41V58.91a15.33 15.33 0 0 0-15.25-15.41Z"
              style={{
                fill: "#d2232a",
              }}
            />
            <circle
              cx={301.61}
              cy={82.72}
              r={30.6}
              style={{
                fill: "#fff",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            {formButton}
            <ellipse cx={345.54} cy={62.67} className="cls-7" rx={7.53} ry={7.64} />
            <ellipse
              cx={371.03}
              cy={62.67}
              rx={7.53}
              ry={7.64}
              style={{
                fill: "#fff200",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            <ellipse
              cx={396.52}
              cy={62.67}
              rx={7.53}
              ry={7.64}
              style={{
                fill: "#00a651",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            <path
              d="M548.5 75.75H442.6A18.07 18.07 0 0 0 431 80l-43.13 37.93a18.08 18.08 0 0 1-11.65 4.26H260.5v7.57h115.67a25.72 25.72 0 0 0 16.51-6l43.18-38a10.51 10.51 0 0 1 6.74-2.44h105.9Z"
              style={{
                fill: "#b0282f",
              }}
            />
            <path
              d="M260.5 122.19h115.67a18.08 18.08 0 0 0 11.65-4.26L431 80a18.07 18.07 0 0 1 11.65-4.25H548.5"
              className="cls-11"
            />
            <path
              d="M260.5 129.76h115.67a25.72 25.72 0 0 0 16.51-6l43.18-38a10.51 10.51 0 0 1 6.74-2.44h105.9"
              className="cls-11"
            />
            <path
              d="M429.89 475.17h-96.32a6 6 0 0 0-6 6.07v42a6 6 0 0 0 6 6.07h96.32a6 6 0 0 0 6-6.07v-42a6 6 0 0 0-6-6.07Z"
              style={{
                fill: "#39b54a",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            <circle
              cx={294.76}
              cy={452.86}
              r={17.38}
              className="cls-13"
              transform="rotate(-67.5 294.758 452.861)"
            />
            {homeButton}
            {searchButton}
            <path
              d="M330.69 455h39.1c2.16 0 3.91-2 3.91-4.52S372 446 369.79 446h-39.1c-2.16 0-3.91 2-3.91 4.51s1.75 4.49 3.91 4.49Z"
              className="cls-7"
            />
            <path
              d="M392.86 455H432c2.16 0 3.91-2 3.91-4.52S434.12 446 432 446h-39.1c-2.16 0-3.91 2-3.91 4.51s1.71 4.49 3.87 4.49Z"
              style={{
                fill: "#00a79d",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            <path
              d="M529.15 469.38H506.5v-22.64a1.74 1.74 0 0 0-1.73-1.74h-17.34c-1 0-4.34 3.95-4.34 4.9v19.48h-20c-1 0-4.35 3.95-4.35 4.91v17.33a1.74 1.74 0 0 0 1.74 1.74h22.65V516a1.74 1.74 0 0 0 1.73 1.73h17.34c1 0 4.34-3.94 4.34-4.9v-19.47h20c1 0 4.35-3.94 4.35-4.9v-17.34a1.74 1.74 0 0 0-1.74-1.74Z"
              className="cls-13"
            />
            {sticks}
            <path
              d="M523.6 138.4h-234a9.15 9.15 0 0 0-7.41 3.8c-2.54 1.52-5.25 6.3-5.25 9.48V391a8.72 8.72 0 0 0 2.54 6.15l25.66 26.73.3.27.71.73a8.61 8.61 0 0 0 6.13 2.55h207.31c3.17 0 7.94-2.71 9.45-5.26a9.21 9.21 0 0 0 3.77-7.42V147.6a9.2 9.2 0 0 0-9.21-9.2Z"
              style={{
                fill: "#939598",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            <path
              d="M523.6 138.91h-234a8.68 8.68 0 0 0-8.6 8.69V388a8.68 8.68 0 0 0 2.54 6.14l25.66 26.74a8.66 8.66 0 0 0 6.13 2.54H523.6a8.69 8.69 0 0 0 8.68-8.69V147.6a8.69 8.69 0 0 0-8.68-8.69Z"
              style={{
                fill: "#f1f2f2",
                stroke: "#231f20",
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
            {optionsButton}
            <path
              d="M461.84 388.7h52.28a1.25 1.25 0 0 0 0-2.5h-52.28a1.24 1.24 0 0 0-1.23 1.27 1.23 1.23 0 0 0 1.23 1.23ZM514.12 401.29h-52.28a1.25 1.25 0 0 0 0 2.49h52.28a1.25 1.25 0 0 0 0-2.49ZM514.12 408.83h-52.28a1.25 1.25 0 0 0 0 2.49h52.28a1.25 1.25 0 0 0 0-2.49ZM514.12 393.75h-52.28a1.25 1.25 0 0 0 0 2.49h52.28a1.25 1.25 0 0 0 0-2.49Z"
              className="cls-2"
            />
            <ellipse cx={397.33} cy={146.29} className="cls-18" rx={3.16} ry={3.17} />
            <ellipse cx={415.91} cy={146.29} className="cls-18" rx={3.16} ry={3.17} />
            <path
              d="M533.25 43.5h-257.5a15.33 15.33 0 0 0-15.25 15.41v473.18a15.33 15.33 0 0 0 15.25 15.41h257.5a15.33 15.33 0 0 0 15.25-15.41V58.91a15.33 15.33 0 0 0-15.25-15.41Z"
              className="cls-11"
            />
            <path
              d="M295.02 153.69h223.2v223.2h-223.2z"
              style={{
                opacity: 0.25,
                fill: "#231f20",
              }}
            />
            <path
              d="M298.62 157.29h216v216h-216z"
              style={{
                fill: "#58595b",
              }}
            />
          </g>
        </g>
      </svg>
    </>
  );
};
export default Pokedex;

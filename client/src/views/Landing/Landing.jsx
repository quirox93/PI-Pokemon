import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <p>POKEMON DATABASE</p>
      <Link to="/home">
        <button>INGRESAR</button>
      </Link>
    </div>
  );
};

export default Landing;

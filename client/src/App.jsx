import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/Landing.jsx";
import DetailCard from "./views/DetailCard/DetailCard";
import { useDispatch } from "react-redux";
import { getAllPokemons, getTypes } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, []);

  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/home/options" element={<Home options={true} />}></Route>
          <Route path="/detail/:id" element={<DetailCard />}></Route>
        </Routes>
      }
    </div>
  );
}

export default App;

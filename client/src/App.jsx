import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Landing from "./components/Landing/Landing.jsx";
function App() {
  return (
    <div className="App">
      {<Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>}
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Dashboard";
import Calculator from "./Pages/Calculator";
import Bmi from "./Pages/Bmi";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="bmi" element={<Bmi />} />
      </Route>
    </Routes>
  );
}

export default App;
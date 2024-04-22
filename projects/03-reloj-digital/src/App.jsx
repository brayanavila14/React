import { useState } from "react";
import Reloj from "./components/Reloj";
import Cronometro from "./components/Cronometro";
import Temporizador from "./components/Temporizador";
import "./App.css";
function App() {
  const [options, setOptions] = useState("reloj");
  return (
    <div className="app">
      {options === "reloj" && <Reloj />}
      {options === "cronometro" && <Cronometro />}
      {options === "temporizador" && <Temporizador />}
      <div className="options">
        <button onClick={() => setOptions("cronometro")}>Cronometro</button>
        <button onClick={() => setOptions("reloj")}>Reloj</button>
        <button onClick={() => setOptions("temporizador")}>Temporizador</button>
      </div>
    </div>
  );
}
export default App;

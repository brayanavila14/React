import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (active) {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [active]);
  return (
    <>
      <h1>Mouse Follower</h1>
      <button onClick={() => setActive(!active)}>
        {active ? "Stop" : "Start"}
      </button>
      {active && (
        <div
          className="follower"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #fff",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: position.x,
            top: position.y,
            width: 20,
            height: 20,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
      )}
    </>
  );
}

export default App;

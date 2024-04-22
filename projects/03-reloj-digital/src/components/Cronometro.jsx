import { useState, useEffect } from "react";
import "./Cronometro.css";
function Cronometro() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const reset = () => {
        setTime(0);
        setIsActive(false);
    };

    return (
        <div className="container-cron">
            <div className="time">{time}s</div>
            <div className="btn-actions">
                <button
                    className={`button button-primary button-primary-${isActive ? "active" : "inactive"
                        }`}
                    onClick={() => setIsActive(!isActive)}
                >
                    {isActive ? "Pause" : "Start"}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}
export default Cronometro;

import { useState, useEffect } from "react";
function Temporizador() {
    const [time, setTime] = useState(0);
    const [timeInput, setTimeInput] = useState(0);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
            if (time === 0) {
                clearInterval(interval);
                setIsActive(false);
            }
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);
    const reset = () => {
        setTime(timeInput);
        setIsActive(false);
    };
    return (
        <div className="container-temp">
            <div className="time">{time}s</div>
            <div className="row">
                <input
                    type="number"
                    value={timeInput}
                    onChange={(e) => setTimeInput(e.target.value)}
                    placeholder="Enter time in seconds"
                />
                <div className="btn-actions">
                    <button
                        className={`button button-primary button-primary-${isActive ? "active" : "inactive"
                            }`}
                        onClick={() => {
                            setIsActive(!isActive);
                            setTime(timeInput);
                        }}
                    >
                        {isActive ? "Pause" : "Start"}
                    </button>
                    <button className="button" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Temporizador;

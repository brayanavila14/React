import { useState, useEffect } from "react";
function Reloj() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container-reloj">
            <div className="time">{time}</div>
        </div>
    );
}
export default Reloj;
import React, { useState } from "react";
import "../../styles/semaforo.css";

const Semaforo = () => {
    const [color, setColor] = useState("");

    return (

        <div className="container">
            <div className="barra"></div>
            <div className="semaforo">
                <div

                    className={`luz roja ${color === "roja" ? "selected" : ""}`}
                    onClick={() => setColor("roja")}

                ></div>

                <div

                    className={`luz amarilla ${color === "amarilla" ? "selected" : ""}`} r
                    onClick={() => setColor("amarilla")}

                ></div>

                <div

                    className={`luz verde ${color === "verde" ? "selected" : ""}`}
                    onClick={() => setColor("verde")}

                ></div>

            </div>
        </div >

    );
};

export default Semaforo;
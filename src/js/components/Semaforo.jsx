import React, { useState } from "react";
import "../../styles/semaforo.css";

const Semaforo = () => {
    const [color, setColor] = useState("red");

return (
    <div className="semaforo">
<p style={{color:"white"}}>hola</p>
    </div>
);
};

export default Semaforo;
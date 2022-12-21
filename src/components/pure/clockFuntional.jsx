import React, {useState, useEffect} from 'react';

const ClockFuntional = (props) => {

    const [persona, setPersona] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );
        return () => {
            clearInterval (timerID);
        };
    }, []);

    function tick(){
        setPersona((prevState) => {
           let edad = prevState.edad +1;
           return {
              ...prevState,
              fecha: new Date(),
              edad
           }
        });
     }

    return (
        <div>
            <h2>
                Hora Actual:
                {persona.fecha.toLocaleTimeString()}
            </h2>
            <h3>{persona.nombre} {persona.apellidos}</h3>
            <h1>Edad: {persona.edad}</h1>
        </div>
    );
}

export default ClockFuntional;


import React, { useEffect, useState } from 'react';

const CoffeeDetail = ({ id }) => {
    const [coffee, setCoffee] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/cafes/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.statusText);
                }
            })
            .then(data => setCoffee(data))
            .catch(error => setError(error.toString()));
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!coffee) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{coffee.nombre}</h1>
            <img src={coffee.imagen} alt={coffee.nombre} />
            <p>Tipo: {coffee.tipo}</p>
            <p>Región: {coffee.region}</p>
            <p>Notas: {coffee.notas}</p>
            <p>Fecha de cultivo: {coffee.fecha_cultivo}</p>
            <p>Altura: {coffee.altura}</p>
        </div>
    );
};

export default CoffeeDetail;

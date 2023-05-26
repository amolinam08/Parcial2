import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const CoffeeList = ({ onSelectCoffee }) => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => setCoffees(data));
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Región</th>
                </tr>
            </thead>
            <tbody>
                {coffees.map(coffee => (
                    <tr key={coffee.id} onClick={() => onSelectCoffee(coffee.id)}>
                        <td>{coffee.id}</td>
                        <td>{coffee.nombre}</td>
                        <td>{coffee.tipo}</td>
                        <td>{coffee.region}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CoffeeList;

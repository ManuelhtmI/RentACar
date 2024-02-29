import React from 'react';

function Table({ cars }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Modèle</th>
          <th>Marque</th>
          <th>Kilométrage</th>
          <th>Agence</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.model}</td>
            <td>{car.brand}</td>
            <td>{car.km}</td>
            <td>{car.agency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

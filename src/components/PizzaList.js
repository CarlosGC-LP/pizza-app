import React, { useEffect, useState } from 'react';
import PizzaCard from './PizzaCard';
import pizzasData from './pizzas.json'; // Ajusta la ruta según la ubicación de tu archivo JSON

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Simula una carga de datos, podrías hacer una llamada a una API aquí si fuera necesario
    setPizzas(pizzasData);
  }, []);

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {pizzas.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
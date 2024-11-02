import React, { useEffect, useState } from 'react';
import PizzaCard from './PizzaCard';
import pizzasData from './pizzas.json'; // Ajusta la ruta según la ubicación de tu archivo JSON

const PizzaList = ({ filter }) => { // Recibe el filtro como prop
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzasData);
  }, []);

  // Filtra las pizzas según el nombre
  const filteredPizzas = pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {filteredPizzas.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;

import React from 'react';

const PizzaCard = ({ pizza }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center">
      <img src="pizza-image-url" alt="Pizza" className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{pizza.name}</h2>
      <p className="text-sm">Precio: S/{pizza.price}</p>
      <p className="text-sm">Rating: {pizza.rating}</p>
      <button className="bg-orange-500 px-4 py-2 mt-4 rounded-md">Comprar</button>
    </div>
  );
};

export default PizzaCard;
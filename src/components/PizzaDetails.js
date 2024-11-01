import React from 'react';

const PizzaDetail = ({ pizza, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg text-gray-800">
        <h2 className="text-2xl font-bold">{pizza.name}</h2>
        <p className="mt-2">Descripción: Una deliciosa {pizza.name}.</p>
        <p>Precio: S/{pizza.price}</p>
        <button className="bg-red-500 px-4 py-2 mt-4 rounded-md" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PizzaDetail;
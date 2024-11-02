import React from 'react';

const Modal = ({ pizza, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2>{pizza.name}</h2>
        <img src={pizza.imageUrl} alt={pizza.name} className="w-full" />
        <p>Precio: {pizza.price} €</p>
        <p>Calificación: {pizza.rating}</p>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
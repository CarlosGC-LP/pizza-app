import React from 'react';

const Checkout = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p>Selecciona el tamaño de la pizza:</p>
      <div className="flex space-x-4 mt-4">
        <button className="bg-gray-800 text-white p-2 rounded">S</button>
        <button className="bg-gray-800 text-white p-2 rounded">M</button>
        <button className="bg-gray-800 text-white p-2 rounded">L</button>
      </div>
      <button className="bg-green-500 px-4 py-2 mt-8 rounded-md text-white">Proceder al Pago</button>
    </div>
  );
};

export default Checkout;
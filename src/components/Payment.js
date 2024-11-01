import React from 'react';

const Payment = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Método de Pago</h2>
      <div className="flex items-center space-x-4">
        <img src="visa-logo-url" alt="Visa" className="w-12" />
        <img src="mastercard-logo-url" alt="Mastercard" className="w-12" />
      </div>
      <input type="text" placeholder="Número de tarjeta" className="p-2 border rounded w-full mt-4" />
      <button className="bg-green-500 px-4 py-2 mt-8 rounded-md text-white">Pagar</button>
    </div>
  );
};

export default Payment;
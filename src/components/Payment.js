import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const total = location.state?.total || 0; // Precio recibido o 0 por defecto

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Pago</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Card Number</label>
          <input type="text" className="border p-2 w-full" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Validity</label>
          <input type="text" className="border p-2 w-full" placeholder="Month/Year" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">CVV</label>
          <input type="text" className="border p-2 w-full" placeholder="123" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Name on Card</label>
          <input type="text" className="border p-2 w-full" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">Total: ${total}</p>
        </div>
        <button className="w-full bg-green-600 text-white p-2 rounded">Pagar</button>
      </div>
    </div>
  );
};

export default Payment;
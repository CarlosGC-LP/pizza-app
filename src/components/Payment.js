import React, { useState } from "react";

function Payment() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-4">Payment</h1>
      <div className="flex items-center gap-4">
        <button onClick={togglePopup} className="bg-green-500 p-2 rounded">
          Pagar con Tarjeta
        </button>
        {/* Más botones de métodos de pago */}
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-black mb-4">Introduce tus datos de pago</h2>
            <input type="text" placeholder="Número de tarjeta" className="p-2 mb-2 w-full" />
            <button onClick={togglePopup} className="bg-red-500 text-white p-2 rounded">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
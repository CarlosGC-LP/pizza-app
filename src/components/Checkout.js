import React from "react";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Cada Pizza seleccionada con detalles */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg">Pizza Vegetariana</h2>
          <p className="text-gray-400">Precio: $40.00</p>
        </div>
        {/* Más tarjetas de pizza seleccionadas aquí */}
      </div>
    </div>
  );
}

export default Checkout;
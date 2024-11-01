import React from "react";

function PizzaCard({ name, price }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-400">${price}</p>
      <button className="bg-orange-500 text-white py-1 px-4 rounded mt-2">
        Comprar
      </button>
    </div>
  );
}

export default PizzaCard;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Pizza App</h1>
      <input
        type="text"
        placeholder="Buscar pizza..."
        className="p-2 rounded-md text-gray-900"
      />
      <div className="flex space-x-4">
        <button className="text-white">Home</button>
        <button className="text-white">Favoritos</button>
        <button className="text-white">Carrito</button>
      </div>
    </nav>
  );
};

export default Navbar;
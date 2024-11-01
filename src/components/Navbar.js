import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Pizza App</h1>
      <input
        type="text"
        placeholder="Buscar pizza..."
        className="p-2 rounded-md text-gray-900"
      />
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link> {/* Enlace a la página principal */}
        </li>
        <li>
          <Link to="/payment" className="text-white">Payment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold"> {/* Haciendo el título un enlace */}
        Pizza App
      </Link>
      <input
        type="text"
        placeholder="Search for pizza.."
        className="p-2 rounded-md text-gray-900 w-96 focus:bg-gray-300 transition duration-200"
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
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';
import Payment from './components/Payment';
import PizzaDetail from './components/PizzaDetail';
import OrderStatus from './components/OrderStatus';
import Login from './components/Login'; // Importa el nuevo componente
import Contact from './components/Contact'; // Importa el nuevo componente Contact
import About from './components/About'; // Importa el nuevo componente About

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar/>
        <Routes>
          <Route path="/" element={<PizzaList />} />       
          <Route path="/payment" element={<Payment />} />
          <Route path="/pizza/:pizzaName" element={<PizzaDetail />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
          <Route path="/contact" element={<Contact />} /> {/* Ruta para Contact */}
          <Route path="/about" element={<About />} /> {/* Ruta para About */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
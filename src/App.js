// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';
import Payment from './components/Payment';
import PizzaDetail from './components/PizzaDetail';
import OrderStatus from './components/OrderStatus';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [filter, setFilter] = useState(''); // Estado para el filtro

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar filter={filter} setFilter={setFilter} />
        <Routes>
          <Route path="/" element={<PizzaList filter={filter} />} />       
          <Route path="/payment" element={<Payment />} />
          <Route path="/pizza/:pizzaName" element={<PizzaDetail />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

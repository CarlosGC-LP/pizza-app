import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black"> {/* Cambia el color de fondo aquí */}
        <Navbar />
        <Routes>
          <Route path="/" element={<PizzaList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
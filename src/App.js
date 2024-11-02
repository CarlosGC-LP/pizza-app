import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';
import Payment from './components/Payment';
import PizzaDetail from './components/PizzaDetail'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black"> {/* Cambia el color de fondo aquí */}
        <Navbar />
        <Routes>
          <Route path="/" element={<PizzaList />} />       
          <Route path="/payment" element={<Payment />} />
          <Route path="/pizza/:pizzaName" element={<PizzaDetail />} /> {/* Ruta para detalle de pizza */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
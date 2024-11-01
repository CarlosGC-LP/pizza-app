import React from "react";
import PizzaCard from "./PizzaCard";

function HomeScreen() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Encuentra la mejor pizza para ti</h1>
        <input
          type="text"
          placeholder="Buscar pizza..."
          className="p-2 rounded bg-gray-700"
        />
      </header>
      <div className="grid grid-cols-3 gap-4 p-4">
        <PizzaCard name="Pizza con salchicha" price="70.00" />
        <PizzaCard name="Pizza con pollo" price="80.00" />
        <PizzaCard name="Pepperoni Pizza" price="90.00" />
      </div>
    </div>
  );
}

export default HomeScreen;
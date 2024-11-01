import React from 'react';
import PizzaCard from './PizzaCard';

const pizzas = [
  { name: 'Pizza Vegetariana', price: 40, rating: 4.2, imageUrl: 'https://cdn.shopify.com/s/files/1/0191/9978/files/Pizza-Veggie-Supreme-blog.jpg?v=1652775259'},
  { name: 'Pizza con Pepperoni', price: 50, rating: 5.0 },
  { name: 'Pizza Suprema', price: 50, rating: 4.0 },
  { name: 'Pizza Margarita', price: 80, rating: 3.4 },
];

const PizzaList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {pizzas.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
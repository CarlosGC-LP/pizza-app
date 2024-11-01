import React from 'react';
import PizzaCard from './PizzaCard';

const pizzas = [
  { name: 'Pizza Vegetariana', price: 40, rating: 4.2, imageUrl: 'https://cdn.shopify.com/s/files/1/0191/9978/files/Pizza-Veggie-Supreme-blog.jpg?v=1652775259'},
  { name: 'Pizza con Pepperoni', price: 50, rating: 5.0, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArskfOI51OA-xtLn1xIq3NC6e5uDQ0fI1xA&s'},
  { name: 'Pizza Suprema', price: 50, rating: 4.0, imageUrl: 'https://www.pizzahut.com.sv/static/media/images/images/jpg/4556_1_08-11-2023-10-57.jpg'},
  { name: 'Pizza Margarita', price: 80, rating: 3.4, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMvYVp5Re0_jNQgK81fqH1eCq-JLUwekHEg&s'},
  { name: 'Pizza Cuatro Quesos', price: 45, rating: 4.7, imageUrl: 'https://www.record.com.pe/wp-content/uploads/2021/09/pizza-4-quesos-g-1.png' },
  { name: 'Pizza BBQ Pollo', price: 55, rating: 4.5, imageUrl: 'https://www.hola.com/horizon/landscape/aa7d374ef914-pizza-pollo-adobe-t.jpg' },
  { name: 'Pizza Hawaiana', price: 50, rating: 4.2, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtP-2LGl3lObIN04XA1oEoNn26v7ykCOOcMQ&s' },
  { name: 'Pizza de Salchicha', price: 60, rating: 4.8, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuULAaqbNLRSU9RUmCUifvI7T8hawh-YQnWQ&s' },
  { name: 'Pizza de Mariscos', price: 70, rating: 4.3, imageUrl: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/c768b918caebefd4f01147f69a70c31e.jpg?itok=BHmrxmn6' },
  { name: 'Pizza Mediterránea', price: 65, rating: 4.6, imageUrl: 'https://osterstatic.reciperm.com/webp/10400.webp' },
  { name: 'Pizza de Champiñones', price: 52, rating: 4.5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5A3t_IvnTMBtJWDTNRKqv1ObUWdR5Ucsgig&s' },
  { name: 'Pizza Mexicana', price: 58, rating: 4.4, imageUrl: 'https://mandolina.co/wp-content/uploads/2023/07/pizza-mexciana-1200x900.png' },
];

const PizzaList = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {pizzas.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
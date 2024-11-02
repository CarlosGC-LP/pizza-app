import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Acerca de Nosotros</h2>
      <p className="mb-4">
        Somos una pizzería apasionada por ofrecer las mejores pizzas de la ciudad. 
        Utilizamos ingredientes frescos y de alta calidad para crear combinaciones deliciosas que satisfacen todos los gustos.
      </p>
      <h3 className="text-xl font-semibold mt-4">Síguenos en nuestras redes sociales:</h3>
      <ul className="mb-6">
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            YouTube
          </a>
        </li>
        <li>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Nuestra Ubicación en Google Maps
          </a>
        </li>
      </ul>
      <h3 className="text-xl font-semibold">Nuestra Misión:</h3>
      <p className="mb-4">
        Proporcionar una experiencia gastronómica excepcional y un servicio al cliente inigualable.
      </p>
      <h3 className="text-xl font-semibold">Nuestra Visión:</h3>
      <p>
        Ser la pizzería favorita de la comunidad, conocida por nuestra dedicación a la calidad y la innovación en cada pizza que servimos.
      </p>
    </div>
  );
};

export default About;
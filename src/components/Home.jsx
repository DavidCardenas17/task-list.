// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container"> {/* Aplica la clase home-container */}
      <h2>Bienvenido a To Do app lista de tareas</h2>
      <p>En nuestra plataforma web encuentras una solución flexible para la administración de tareas, en la cual pueden crear listas personalizadas. Con funciones que permiten actualizar, eliminar y crear tareas.</p>

      <div className="button-container"> 
        <Link to="/todos">
          <button className="go-to-todos-button">Ir a la Lista de Tareas</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

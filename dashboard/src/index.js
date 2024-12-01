import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
const Dashboard = () => {
    // Función para redirigir al microfrontend de gestión de usuarios
    const handleRedirect = () => {
      window.location.href = 'http://localhost:3001'; // Reemplaza con la URL de tu microfrontend de usuarios
    };
  
    return (
      <div>
        <h2>Dashboard</h2>
        <p>Bienvenido al panel de control</p>
        <button onClick={handleRedirect}>Ir a Gestión de Usuarios</button>
      </div>
    );
  };
  
  export default Dashboard;
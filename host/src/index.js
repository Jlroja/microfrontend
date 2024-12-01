import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Aplicación Principal</h1>
    <React.Suspense fallback="Cargando User...">
      <user.UserList />
    </React.Suspense>
    <React.Suspense fallback="Cargando Dashboard...">
      <dashboard.Dashboard />
    </React.Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

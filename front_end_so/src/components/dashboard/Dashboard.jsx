import React from 'react';

const Dashboard = ({ cliente }) => {
  return (
    <div className="max-w-4xl mx-auto text-center mt-20">
      <h1 className="text-3xl font-bold text-purple-800">
        ¡Bienvenido al Dashboard, {cliente?.nombreCompania}!
      </h1>
    </div>
  );
};

export default Dashboard;

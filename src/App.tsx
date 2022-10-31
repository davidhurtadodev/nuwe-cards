import React from 'react';
import './App.scss';
import { AppUI } from './ui/AppUI';

import { services } from './application/services';

function App() {
  const starterServices = services.map((service) => {
    if (
      service.name === 'Cooking recipes' ||
      service.name === 'Guided meditations' ||
      service.name === 'Mindfulness exercises' ||
      service.name === 'Sleep podcast and exercises'
    ) {
      return { name: service.name, included: !service.included };
    }
    return service;
  });

  return (
    <>
      <AppUI starterServices={starterServices} />
    </>
  );
}

export default App;

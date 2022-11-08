import { useState } from 'react';

import { AppUI } from './ui/AppUI';

import { services } from './application/services';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  const starterServices = services.map((service) => {
    if (
      service.name === 'Cooking recipes' ||
      service.name === 'Guided meditations' ||
      service.name === 'Mindfulness exercises' ||
      service.name === 'Sleep podcasts and exercises'
    ) {
      return { name: service.name, included: !service.included };
    }
    return service;
  });
  const proServices = services.map((service) => {
    if (
      service.name === 'Cooking recipes' ||
      service.name === 'Guided meditations'
    ) {
      return { name: service.name, included: !service.included };
    }
    return service;
  });

  return (
    <>
      <AppUI
        services={services}
        starterServices={starterServices}
        proServices={proServices}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default App;

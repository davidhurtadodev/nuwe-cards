import { useState } from 'react';

import { AppUI } from './ui/AppUI';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AppUI showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;

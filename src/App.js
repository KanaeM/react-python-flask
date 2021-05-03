import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Plants} from './components/Plants.js';
import './App.css';

function App() {
  const [plant, setPlant] = useState('NA');

  useEffect(() => {
    fetch('/api/plants')
      .then((res) => res.json())
      .then((data) => setPlant(data.plant))
      .catch((err) => console.log('Error', err));
  })

  return (
    <div className="App">
      <header className="App-header">
        <Plants plant={plant} />
      </header>
    </div>
  );
}

export default App;

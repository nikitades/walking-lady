import React from 'react';
import logo from './logo.svg';
import './App.css';
import Model from './Model/Model';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Model modelSrc={'/public/model/model.gltf'} />
      </header>
    </div>
  );
}

export default App;

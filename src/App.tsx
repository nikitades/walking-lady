import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCanvas from './Model/MyCanvas';
import { Loader } from '@react-three/drei';

function App() {
  const [isTyanWalking, setIsTyanWalking] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
          <Suspense fallback={<Loader />}>
            <MyCanvas isTyanWalking={isTyanWalking} modelSrc={'/models/tyan/scene.gltf'} />
          </Suspense>
        </div>
        <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
          <input
            onClick={setIsTyanWalking.bind(null, !isTyanWalking)}
            type="button"
            value={"Go! (" + (isTyanWalking ? 'walking' : 'stopped') + ")"}
            style={{ width: '100px', height: '100px', display: 'block' }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

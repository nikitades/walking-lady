import React from 'react';
import { Canvas } from '@react-three/fiber'
import Box from './Box';

interface ModelProps {
    modelSrc: string;
}

const Model = ({ modelSrc }: ModelProps) => {
    return (
        <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    );
}

export default Model;
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

interface CanvasProps {
    modelSrc: string;
    isTyanWalking: boolean;
}

const MyCanvas = (canvasProps: CanvasProps) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[15, 15, 15]} />
            <pointLight position={[-15, -15, -15]} />
            <pointLight position={[0, 0, 15]} />
            <pointLight position={[15, 0, 15]} />
            <pointLight position={[0, 15, 15]} />
            <Model {...canvasProps} />
            <OrbitControls />
        </Canvas>
    );
}

export default MyCanvas;
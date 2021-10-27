import { useAnimations, useGLTF } from '@react-three/drei';
import React, { Suspense, useEffect, useRef } from 'react';
import { Object3D, Vector3 } from 'three';

interface ModelProps {
    modelSrc: string;
    isTyanWalking: boolean;
}

const Model = ({ modelSrc, isTyanWalking }: ModelProps) => {
    const { scene, animations } = useGLTF(modelSrc);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        actions.walking?.[isTyanWalking ? 'play' : 'stop']();
    }, [actions, isTyanWalking])

    return <primitive position={new Vector3(0, -2, 0)} color={'hotpink'} name="Object_0" object={scene} />;
};

export default Model;
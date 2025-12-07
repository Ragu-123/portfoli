// @ts-nocheck
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const SceneContent: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-10, -10, -5]} color="#f7768e" intensity={1} />
            <Environment preset="city" />
        </>
    );
}

export const VoxelScene: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 18], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <SceneContent />
            </Canvas>
        </div>
    );
};
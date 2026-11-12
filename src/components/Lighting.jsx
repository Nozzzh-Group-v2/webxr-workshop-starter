import React from "react";
import { Environment } from "@react-three/drei";

export function Lighting() {
  return (
    <>
      {/* AMBIENT LIGHT */}
      <ambientLight intensity={0.5} color="#e0f7fc" />

      {/* SINAR MATAHARI */}
      <directionalLight
        position={[25, 35, 20]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color="#fffaf0"
      />

      {/* LAMPU SOROT */}
      <pointLight
        position={[-10, 10, -10]}
        intensity={2}
        color="#ff9800"
        distance={40}
      />

      {/* ENVIRONMENT PRESET */}
      <Environment preset="sunset" />
    </>
  );
}

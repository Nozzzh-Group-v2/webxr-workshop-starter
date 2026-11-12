import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PowerPlantArea } from "./PowerPlantArea";
import { Lighting } from "./Lighting";

export default function Experience() {
  return (
    <Canvas
      camera={{ position: [0, 10, 20], fov: 60 }}
      shadows
      style={{ width: "100vw", height: "100vh", background: "#111" }}
    >
      <Lighting />
      <PowerPlantArea />

      {/* CONTROL CAMERA */}
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.05} />
    </Canvas>
  );
}

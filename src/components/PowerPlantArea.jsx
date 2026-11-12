import React from "react";

export function PowerPlantArea() {
  return (
    <group>
      {/* GROUND */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        position={[0, -0.01, 0]}
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.8} />
      </mesh>

      {/* GRID AREA */}
      <gridHelper args={[100, 50, "#1abc9c", "#34495e"]} position={[0, 0, 0]} />

      {/* BLOK GEDUNG UTAMA */}
      <mesh position={[0, 2, -15]} castShadow receiveShadow>
        <boxGeometry args={[20, 4, 10]} />
        <meshStandardMaterial color="#7f8c8d" roughness={0.5} />
      </mesh>
    </group>
  );
}

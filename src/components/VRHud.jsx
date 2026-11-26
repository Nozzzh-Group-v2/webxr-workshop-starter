// src/components/VRHud.jsx
import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useXRInputSourceStates } from "@react-three/xr";
import { Text } from "@react-three/drei";

export function VRHud() {
  const inputSources = useXRInputSourceStates();
  const [leftConnected, setLeftConnected] = useState(false);
  const [rightConnected, setRightConnected] = useState(false);

  useFrame(() => {
    let hasLeft = false;
    let hasRight = false;
    for (const src of inputSources) {
      if (src.type === "controller") {
        if (src.inputSource.handedness === "left") hasLeft = true;
        if (src.inputSource.handedness === "right") hasRight = true;
      }
    }
    if (hasLeft !== leftConnected) setLeftConnected(hasLeft);
    if (hasRight !== rightConnected) setRightConnected(hasRight);
  });

  return (
    <group position={[0, 2.5, -3]}>
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[2.4, 0.5]} />
        <meshBasicMaterial color="#0a0a1a" transparent opacity={0.75} />
      </mesh>

      <Text
        position={[0, 0.12, 0]}
        fontSize={0.1}
        color="#e0e0e0"
        anchorX="center"
        anchorY="middle"
      >
        WebXR Power Plant — VR Mode
      </Text>

      <Text
        position={[-0.5, -0.08, 0]}
        fontSize={0.065}
        color={leftConnected ? "#4caf50" : "#f44336"}
        anchorX="center"
        anchorY="middle"
      >
        {leftConnected ? "● Left Controller" : "○ Left Controller"}
      </Text>

      <Text
        position={[0.5, -0.08, 0]}
        fontSize={0.065}
        color={rightConnected ? "#4caf50" : "#f44336"}
        anchorX="center"
        anchorY="middle"
      >
        {rightConnected ? "● Right Controller" : "○ Right Controller"}
      </Text>
    </group>
  );
}

// src/components/VRControllerManager.jsx
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useXRInputSourceStateContext,
  XRControllerModel,
  XRControllerComponent,
  useXRControllerButtonEvent,
} from "@react-three/xr";
import { Text } from "@react-three/drei";
import * as THREE from "three";

function ButtonPressIndicator({ label, isPressed, color = "#00ff88" }) {
  const ringRef = useRef();
  const [opacity, setOpacity] = useState(0);

  useFrame((_, delta) => {
    const target = isPressed ? 1 : 0;
    const current = opacity;
    const next = THREE.MathUtils.lerp(current, target, delta * 12);
    if (Math.abs(next - current) > 0.001) {
      setOpacity(next);
    }
    if (ringRef.current) {
      ringRef.current.scale.setScalar(isPressed ? 1.2 : 1);
    }
  });

  if (opacity < 0.01) return null;

  return (
    <group>
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[0.006, 0.01, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={opacity * 0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Text
        position={[0, 0.03, 0]}
        fontSize={0.008}
        color={color}
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.001}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </group>
  );
}

function TrackedButton({ id, label, color }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <XRControllerComponent
      id={id}
      onPress={() => setIsPressed(true)}
      onRelease={() => setIsPressed(false)}
    >
      <ButtonPressIndicator label={label} isPressed={isPressed} color={color} />
    </XRControllerComponent>
  );
}

export function VRControllerDisplay() {
  const state = useXRInputSourceStateContext("controller");
  const handedness = state?.inputSource?.handedness;
  const isLeft = handedness === "left";

  useXRControllerButtonEvent(state, "xr-standard-trigger", (buttonState) => {
    if (buttonState === "pressed") {
      try {
        const gamepad = state?.inputSource?.gamepad;
        if (gamepad?.hapticActuators?.length > 0) {
          gamepad.hapticActuators[0].pulse(0.6, 80);
        } else if (gamepad?.vibrationActuator) {
          gamepad.vibrationActuator.playEffect("dual-rumble", {
            duration: 80,
            strongMagnitude: 0.4,
            weakMagnitude: 0.6,
          });
        }
      } catch (e) { /* Haptics not supported */ }
    }
  });

  useXRControllerButtonEvent(state, "xr-standard-squeeze", (buttonState) => {
    if (buttonState === "pressed") {
      try {
        const gamepad = state?.inputSource?.gamepad;
        if (gamepad?.hapticActuators?.length > 0) {
          gamepad.hapticActuators[0].pulse(0.3, 50);
        } else if (gamepad?.vibrationActuator) {
          gamepad.vibrationActuator.playEffect("dual-rumble", {
            duration: 50,
            strongMagnitude: 0.3,
            weakMagnitude: 0.3,
          });
        }
      } catch (e) { /* Haptics not supported */ }
    }
  });

  const buttons = isLeft
    ? [
        { id: "x-button", label: "X", color: "#4fc3f7" },
        { id: "y-button", label: "Y", color: "#4fc3f7" },
        { id: "xr-standard-trigger", label: "Trigger", color: "#ff9800" },
        { id: "xr-standard-squeeze", label: "Grip", color: "#ab47bc" },
        { id: "xr-standard-thumbstick", label: "Stick", color: "#66bb6a" },
        { id: "thumbrest", label: "Rest", color: "#78909c" },
      ]
    : [
        { id: "a-button", label: "A", color: "#4fc3f7" },
        { id: "b-button", label: "B", color: "#4fc3f7" },
        { id: "xr-standard-trigger", label: "Trigger", color: "#ff9800" },
        { id: "xr-standard-squeeze", label: "Grip", color: "#ab47bc" },
        { id: "xr-standard-thumbstick", label: "Stick", color: "#66bb6a" },
        { id: "thumbrest", label: "Rest", color: "#78909c" },
      ];

  return (
    <group>
      <XRControllerModel />
      {buttons.map(({ id, label, color }) => (
        <TrackedButton key={id} id={id} label={label} color={color} />
      ))}
    </group>
  );
}

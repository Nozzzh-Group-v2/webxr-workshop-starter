// src/components/MachineAsset.jsx
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useGLTF, Text } from "@react-three/drei";

export function MachineAsset({
    modelPath,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,
    panelHeight = 4.5,
    label = "UNIT PEMBANGKIT",
    status = "NORMAL",
    telemetry = "20 kV | 50 Hz",
}) {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();

    const clonedScene = useMemo(() => scene.clone(true), [scene]);

    useEffect(() => {
        if (!modelRef.current) return;

        modelRef.current.position.set(0, 0, 0);
        modelRef.current.rotation.set(0, 0, 0);
        modelRef.current.scale.set(1, 1, 1);
        modelRef.current.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(modelRef.current);
        if (!box.isEmpty()) {
            const center = new THREE.Vector3();
            box.getCenter(center);
            modelRef.current.position.set(
                -center.x * scale,
                -box.min.y * scale,
                -center.z * scale,
            );
            modelRef.current.scale.setScalar(scale);
        }
    }, [clonedScene, scale]);

    return (
        <group position={position} rotation={rotation}>
            <group ref={modelRef}>
                <primitive object={clonedScene} castShadow receiveShadow />
            </group>
            <group position={[0, panelHeight, 0]}>
                <mesh position={[0, 0, -0.05]}>
                    <planeGeometry args={[4.4, 1.55]} />
                    <meshBasicMaterial color="#0b132b" transparent opacity={0.85} />
                </mesh>

                <Text
                    position={[0, 0.42, 0]}
                    fontSize={0.28}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>

                <Text
                    position={[0, 0.02, 0]}
                    fontSize={0.2}
                    color="#90e0ef"
                    anchorX="center"
                    anchorY="middle"
                >
                    {telemetry}
                </Text>

                <Text
                    position={[0, -0.38, 0]}
                    fontSize={0.22}
                    color={status === "NORMAL" ? "#2ecc71" : "#e74c3c"}
                    anchorX="center"
                    anchorY="middle"
                >
                    STATUS: {status}
                </Text>
            </group>
        </group>
    );
}

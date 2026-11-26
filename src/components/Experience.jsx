import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createXRStore, XR, XROrigin } from "@react-three/xr";
import { PowerPlantArea } from "./PowerPlantArea";
import { Lighting } from "./Lighting";
import { MachineAsset } from "./MachineAsset";
import { VRControllerDisplay } from "./VRControllerManager";
import { VRHud } from "./VRHud";
import { VRButton } from "./VRButton";

// Create the XR store with controller config
const store = createXRStore({
  requiredFeatures: ["local-floor"],
  optionalFeatures: ["bounded-floor", "hand-tracking"],
  controller: VRControllerDisplay,
  hand: true,
});

export default function Experience() {
  return (
    <>
      {/* VR Entry Button (HTML overlay) */}
      <VRButton onClick={() => store.enterVR()} />

      <Canvas
        camera={{ position: [0, 14, 30], fov: 55 }}
        shadows
        style={{ width: "100vw", height: "100vh", background: "#111" }}
      >
        <XR store={store}>
          <XROrigin position={[0, 0, 15]} />

          <Lighting />
          <ambientLight intensity={0.4} />
          <PowerPlantArea />

          <Suspense fallback={null}>
            <MachineAsset
              modelPath="/models/turbine.glb"
              position={[-12, 0, -4]}
              scale={0.28}
              panelHeight={11.5}
              label="TURBIN #01"
              telemetry="MW: 2.4 MW | RPM: 18"
              status="NORMAL"
            />

            <MachineAsset
              modelPath="/models/transformer.glb"
              position={[0, 0, 2]}
              scale={1}
              panelHeight={5.5}
              label="TRANSFORMATOR #02"
              telemetry="TEMP: 68°C | LOAD: 82%"
              status="NORMAL"
            />

            <MachineAsset
              modelPath="/models/tower.glb"
              position={[12, 0, -4]}
              scale={2}
              panelHeight={1}
              label="MENARA TRANSMISI"
              telemetry="LINE: 150 kV | ACTIVE"
              status="NORMAL"
            />
          </Suspense>

          <VRHud />

          <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.05} />
        </XR>
      </Canvas>
    </>
  );
}

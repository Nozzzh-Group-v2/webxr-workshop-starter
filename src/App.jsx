import React from "react";
import "./App.css";
import Experience from "./components/Experience";
import { EnergyGallery } from "./components/EnergyGallery";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* 3D WEBXR */}
      <Experience />

      {/* GALLERY */}
      {/* <EnergyGallery /> */}
    </div>
  );
}

export default App;

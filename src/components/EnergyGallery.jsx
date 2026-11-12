// src/components/EnergyGallery.jsx
import React from "react";

export function EnergyGallery() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        width: "350px",
        background: "rgba(0, 0, 0, 0.8)",
        padding: "10px",
        borderRadius: "10px",
        zIndex: 10,
        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
      }}
    >
      <h4
        style={{
          color: "#fff",
          fontSize: "14px",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        Reference 3D Asset: Solid Power
      </h4>
      <div
        className="sketchfab-embed-wrapper"
        style={{ width: "100%", height: "200px" }}
      >
        <iframe
          title="SOLID Power - Stylized Energy Props Pack"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/59034aae147847798e0a57d2a77193e7/embed"
          style={{ width: "100%", height: "100%", borderRadius: "6px" }}
        ></iframe>
      </div>
      <p
        style={{
          fontSize: "11px",
          textAlign: "center",
          margin: "5px 0 0 0",
          color: "#aaa",
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/solid-power-stylized-energy-props-pack-59034aae147847798e0a57d2a77193e7"
          target="_blank"
          rel="nofollow"
          style={{ color: "#1CAAD9" }}
        >
          SOLID Power Pack
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/PolyClem"
          target="_blank"
          rel="nofollow"
          style={{ color: "#1CAAD9" }}
        >
          PolyClem
        </a>
      </p>
    </div>
  );
}

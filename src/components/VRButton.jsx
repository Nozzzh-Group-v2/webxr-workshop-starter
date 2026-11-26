// src/components/VRButton.jsx
import React from "react";

export function VRButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        padding: "14px 36px",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#ffffff",
        background: "linear-gradient(135deg, #1a73e8 0%, #6c3ce0 100%)",
        border: "2px solid rgba(255,255,255,0.25)",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow:
          "0 4px 20px rgba(26, 115, 232, 0.4), 0 2px 8px rgba(0,0,0,0.3)",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        letterSpacing: "0.5px",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateX(-50%) scale(1.05)";
        e.target.style.boxShadow =
          "0 6px 28px rgba(26, 115, 232, 0.6), 0 4px 12px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateX(-50%) scale(1)";
        e.target.style.boxShadow =
          "0 4px 20px rgba(26, 115, 232, 0.4), 0 2px 8px rgba(0,0,0,0.3)";
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 7H3.5C2.67 7 2 7.67 2 8.5V15.5C2 16.33 2.67 17 3.5 17H8.12C8.65 17 9.14 16.7 9.38 16.22L10.62 13.78C10.86 13.3 11.35 13 11.88 13H12.12C12.65 13 13.14 13.3 13.38 13.78L14.62 16.22C14.86 16.7 15.35 17 15.88 17H20.5C21.33 17 22 16.33 22 15.5V8.5C22 7.67 21.33 7 20.5 7Z"
          fill="white"
        />
        <circle cx="7" cy="12" r="2" fill="#1a73e8" />
        <circle cx="17" cy="12" r="2" fill="#6c3ce0" />
      </svg>
      MASUK VR
    </button>
  );
}

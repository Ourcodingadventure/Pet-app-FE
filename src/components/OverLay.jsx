import { CircularProgress } from "@mui/material";
import React from "react";

function OverLay({ visible }) {
  if (!visible) return null;
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background: "lightgray",
        opacity: ".5",
        zIndex: 999,
      }}
    >
      <CircularProgress
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
        color="inherit"
      />
    </div>
  );
}

export default OverLay;

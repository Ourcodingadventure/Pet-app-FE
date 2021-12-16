import React from "react";

export default function Error({ isVisible, msg }) {
  if (isVisible) return <p style={{ color: "red" }}>{msg}</p>;
  else return null;
}

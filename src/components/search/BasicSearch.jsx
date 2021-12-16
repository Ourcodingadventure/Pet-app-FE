import React from "react";
import { Button } from "@mui/material";
import TypeOfPet from "./TypeOfPet";
function BasicSearch({ type, setType, getTypePet }) {
  return (
    <div style={{ flex: 1, flexWrap: "wrap", padding: 50, width: 250 }}>
      <TypeOfPet type={type} setType={setType} />
      <Button onClick={() => getTypePet()} style={{ color: "#8F3013" }}>
        Submit
      </Button>
    </div>
  );
}

export default BasicSearch;

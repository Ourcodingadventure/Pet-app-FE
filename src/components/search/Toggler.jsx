import { Button } from "@mui/material";
import React from "react";

function Toggler({ advSearch, setAdvanceSearch }) {
  return (
    <div>
      <Button
        style={
          !advSearch
            ? {
                background: "lightgray",
                color: "black",
                fontSize: "1em",
                fontWeight: "bold",
              }
            : { color: "#8F3013", fontSize: "1.2em", fontWeight: "bold" }
        }
        disabled={advSearch ? false : true}
        onClick={() => setAdvanceSearch(false)}
      >
        Basic Search
      </Button>

      <Button
        style={
          advSearch
            ? {
                background: "lightgray",
                color: "black",
                fontSize: "1em",
                fontWeight: "bold",
              }
            : { color: "#8F3013", fontSize: "1em", fontWeight: "bold" }
        }
        disabled={!advSearch ? false : true}
        onClick={() => setAdvanceSearch(true)}
      >
        Advance Search
      </Button>
    </div>
  );
}

export default Toggler;

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function StatusSelect({ setStatus, adoptionStatus }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{adoptionStatus}</InputLabel>
      <Select
        defaultValue={adoptionStatus}
        label={adoptionStatus}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={(e) => setStatus(e.target.value)}
      >
        <MenuItem value="adopted">adopted</MenuItem>
        <MenuItem value="fostered">fostered</MenuItem>
        <MenuItem value="ready for adoption">available</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusSelect;

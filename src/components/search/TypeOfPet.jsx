import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function TypeOfPet({ type, setType }) {
  return (
    <FormControl style={{ paddingBottom: 10 }} fullWidth>
      <InputLabel id="demo-simple-select-label">{type}</InputLabel>
      <Select
        defaultValue={type}
        label={type}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="dog">dog</MenuItem>
        <MenuItem value="cat">cat</MenuItem>
        <MenuItem value="fish">fish</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TypeOfPet;

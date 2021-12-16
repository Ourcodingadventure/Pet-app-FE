import { Button, Input } from "@mui/material";

import StatusSelect from "./StatusSelect";
import TypeOfPet from "./TypeOfPet";

export default function AdvanceSearch({
  setPetHeight,
  setPetName,
  setPetWeight,
  setStatus,
  adoptionStatus,
  setType,
  type,
  getTypePet,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ paddingBottom: 10, alignSelf: "center" }}>
        <div
          style={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            style={{ padding: 10 }}
            placeholder="Name"
            onChange={(e) => setPetName(e.target.value)}
          ></Input>
          <Input
            onChange={(e) => setPetHeight(e.target.value)}
            style={{ padding: 10 }}
            placeholder="Height"
          ></Input>
          <Input
            onChange={(e) => setPetWeight(e.target.value)}
            style={{ padding: 10 }}
            placeholder="Weight"
          ></Input>
        </div>
      </div>
      <div style={{ padiding: 5 }}>
        <TypeOfPet type={type} setType={setType} />
      </div>
      <div style={{ padiding: 5 }}>
        <StatusSelect adoptionStatus={adoptionStatus} setStatus={setStatus} />
        <Button onClick={() => getTypePet()} style={{ color: "#8F3013" }}>
          Submit
        </Button>
      </div>
    </div>
  );
}

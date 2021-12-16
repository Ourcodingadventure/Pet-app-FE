import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import React, { useContext, useState } from "react";
import StatusSelect from "../../components/search/StatusSelect";
import TypeOfPet from "../../components/search/TypeOfPet";

import axios from "axios";
import { GlobalState } from "../../Context/Context";

function AddAPet() {
  const { setLoading } = useContext(GlobalState);
  const [type, setType] = useState("");
  const [petName, setPetName] = useState("");
  const [adoptionStatus, setStatus] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [allergies, setAllergies] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [breed, setBreed] = useState("");

  const submitPet = async () => {
    try {
      setLoading(true);
      let formData = new FormData();
      formData.append("picture", document.getElementById("file").files[0]);
      formData.append("petName", petName);
      formData.append("type", type);
      formData.append("height", height);
      formData.append("weight", weight);
      formData.append("color", color);
      formData.append("bio", bio);
      formData.append("allergies", allergies);
      formData.append("adoptionStatus", adoptionStatus);
      formData.append("dietaryRestrictions", dietaryRestrictions);
      formData.append("breed", breed);
      await axios({
        method: "post",
        url: `http://localhost:5000/add-pet`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper style={{ width: "50%", opacity: 0.7 }}>
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
              required
              style={{ padding: 10 }}
              placeholder="Name"
              onChange={(e) => setPetName(e.target.value)}
            ></Input>
            <Input
              required
              onChange={(e) => setHeight(e.target.value)}
              style={{ padding: 10 }}
              placeholder="Height"
            ></Input>
            <Input
              required
              onChange={(e) => setWeight(e.target.value)}
              style={{ padding: 10 }}
              placeholder="Weight"
            ></Input>
            <Input
              required
              type="file"
              style={{ padding: 10 }}
              placeholder="picture"
              id="file"
            ></Input>
            <Input
              required
              style={{ padding: 10 }}
              placeholder="color"
              onChange={(e) => setColor(e.target.value)}
            ></Input>
            <Input
              required
              style={{ padding: 10 }}
              placeholder="bio"
              onChange={(e) => setBio(e.target.value)}
            ></Input>
            <Input
              required
              style={{ padding: 10 }}
              placeholder="breed"
              onChange={(e) => setBreed(e.target.value)}
            ></Input>
            <Input
              required
              onChange={(e) => {
                setDietaryRestrictions(e.target.value);
              }}
              style={{ padding: 10 }}
              placeholder="Dietary Restrictions"
            ></Input>
          </div>
        </div>
        <div>
          <FormControl style={{ paddingBottom: 10 }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Is this pet allergic
            </InputLabel>
            <Select
              label="Is this pet allergic"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => setAllergies(e.target.value)}
            >
              <MenuItem value="true">true</MenuItem>
              <MenuItem value="false">false</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ padiding: 5 }}>
          <TypeOfPet type={type} setType={setType} />
        </div>
        <div style={{ padiding: 5 }}>
          <StatusSelect adoptionStatus={adoptionStatus} setStatus={setStatus} />
          <Button onClick={() => submitPet()} style={{ color: "#8F3013" }}>
            Submit
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default AddAPet;

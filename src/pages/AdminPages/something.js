import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import StatusSelect from "../../components/search/StatusSelect";
import TypeOfPet from "../../components/search/TypeOfPet";
import { GlobalState } from "../../Context/Context";

export default function EditPet() {
  const { pet, setPet, setLoading } = useContext(GlobalState);
  console.log(pet);
  const [type, setType] = useState(pet.type);
  const [petName, setPetName] = useState(pet.petName);
  const [adoptionStatus, setStatus] = useState(pet.adoptionStatus);
  const [picture, setPicture] = useState(pet.picture);
  const [height, setHeight] = useState(pet.height);
  const [weight, setWeight] = useState(pet.weight);
  const [color, setColor] = useState(pet.color);
  const [bio, setBio] = useState(pet.bio);
  const [allergies, setAllergies] = useState(pet.allergies);
  const [dietaryRestrictions, setDietaryRestrictions] = useState(
    pet.dietaryRestrictions
  );
  const [breed, setBreed] = useState(pet.breed);

  const updatePet = async () => {
    let formData = new FormData();
    try {
      setLoading(true);
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
      const response = await axios({
        method: "put",
        url: `http://localhost:5000/edit-pet`,
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
              value={petName}
              style={{ padding: 10 }}
              placeholder="Name"
              onChange={(e) => setPetName(e.target.value)}
            ></Input>
            <Input
              value={height}
              required
              onChange={(e) => setHeight(e.target.value)}
              style={{ padding: 10 }}
              placeholder="Height"
            ></Input>
            <Input
              value={weight}
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
              value={color}
              style={{ padding: 10 }}
              placeholder="color"
              onChange={(e) => setColor(e.target.value)}
            ></Input>
            <Input
              value={bio}
              required
              style={{ padding: 10 }}
              placeholder="bio"
              onChange={(e) => setBio(e.target.value)}
            ></Input>
            <Input
              value={breed}
              required
              style={{ padding: 10 }}
              placeholder="breed"
              onChange={(e) => setBreed(e.target.value)}
            ></Input>
            <Input
              value={dietaryRestrictions}
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
          <Button onClick={() => updatePet()} style={{ color: "#8F3013" }}>
            Update
          </Button>
        </div>
      </Paper>
    </div>
  );
}

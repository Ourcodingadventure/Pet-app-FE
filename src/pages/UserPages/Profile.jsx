import { Button, Input, Paper, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalState } from "../../Context/Context";
import { updateProfile } from "../../lib/lib";

function Profile() {
  // import the proper profile here to get all the fields
  const { profile } = useContext(GlobalState);
  console.log("profile:", profile);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [bio, setBio] = useState(profile.bio);
  const submitHandler = () => {
    let obj = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      bio,
    };
    updateProfile(obj);
  };
  return (
    <div>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
          padding: 30,
          overflow: "hidden",
          borderRadius: 10,
          width: 350,
          margin: "auto",
          alignSelf: "center",
          opacity: ".8",
        }}
        elevation={3}
      >
        <span style={{ paddingTop: 20 }}>
          First Name:{" "}
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Input>
        </span>
        <span style={{ paddingTop: 20 }}>
          Last Name:{" "}
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Input>
        </span>
        <span style={{ paddingTop: 20 }}>
          Email:{" "}
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </span>
        <span style={{ paddingTop: 20 }}>
          Password:{" "}
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </span>
        <span style={{ paddingTop: 20 }}>
          {" "}
          Phone Number:{" "}
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Input>
        </span>
        <span style={{ paddingTop: 20 }}>
          Bio:{" "}
          <TextField
            multiline
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></TextField>
        </span>
        <Button onClick={submitHandler} style={{ color: "#8F3013" }}>
          Submit
        </Button>
      </Paper>
    </div>
  );
}

export default Profile;

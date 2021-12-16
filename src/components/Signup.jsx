import React, { useContext, useState } from "react";
import { Modal, Paper, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { postUser } from "../lib/lib";
import { GlobalState } from "../Context/Context";

function SignUp({ handleClose, open }) {
  const { setLoading } = useContext(GlobalState);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const submitUserHandler = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const payload = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber,
      };
      await postUser(payload);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  function CheckForLetters(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    }
  }
  function CheckForNumbers(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode > 65 && keyCode < 122) {
      e.preventDefault();
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            minWidth: `300px`,
            minHeight: `100px`,
            padding: `10px`,
            margin: `20px`,
            justifyContent: "center",
            alignItems: "center",
          }}
          elevation={3}
        >
          <Paper
            style={{ margin: `10px 10%`, padding: `25px 50px` }}
            elevation={3}
          >
            <form onSubmit={submitUserHandler}>
              <TextField
                onKeyDown={CheckForLetters}
                type="text"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="FirstName"
                style={{ margin: "5px", width: "100%", resize: "none" }}
                required
              ></TextField>
              <TextField
                type="text"
                onKeyDown={CheckForLetters}
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Lastname"
                style={{ margin: "5px", width: "100%", resize: "none" }}
                required
              ></TextField>
              <TextField
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                style={{ margin: "5px", width: "100%", resize: "none" }}
              ></TextField>
              <TextField
                required
                inputProps={{ minLength: 8 }}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password : minimum 8 Chars"
                style={{ margin: "5px", width: "100%", resize: "none" }}
              ></TextField>
              <TextField
                required
                inputProps={{ minLength: 8 }}
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="Confirm Password: Case Sensitive"
                style={{ margin: "5px", width: "100%", resize: "none" }}
              ></TextField>
              <TextField
                required
                inputProps={{ maxLength: 10 }}
                value={phoneNumber}
                onKeyDown={CheckForNumbers}
                onChange={(e) => setphoneNumber(e.target.value)}
                placeholder="Phone number: 10 digit format i.e. 1234567890"
                style={{
                  textDecoration: "none",
                  margin: "5px",
                  width: "100%",
                  resize: "none",
                }}
              ></TextField>
              <Button type="submit">SignUp</Button>
            </form>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default SignUp;

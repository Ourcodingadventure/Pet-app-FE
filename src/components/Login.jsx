import React, { useState, useContext } from "react";
import { Modal, Paper, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { logUserIn } from "../lib/lib";
import { GlobalState } from "../Context/Context";
function Login({ handleClose, open }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser, setLoading } = useContext(GlobalState);
  const loginHandler = async () => {
    const payload = {
      email,
      password,
    };
    try {
      setLoading(true);
      const response = await logUserIn(payload);
      console.log("checking response", response.data.user);
      setUser(response.data.user);
      console.log("user:", user);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };
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
            <div className="upDateForm">
              <TextField
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: "5px", width: "100%", resize: "none" }}
              ></TextField>
              <TextField
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: "5px", width: "100%", resize: "none" }}
              ></TextField>
              <Button onClick={loginHandler}>Login</Button>
            </div>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default Login;

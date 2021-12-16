import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Signup from "../Signup";
import Login from "../Login";
import { Link } from "react-router-dom";

function LoggedOutNavbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signinOpen, setSignupOpen] = useState(false);

  const handleLoginClose = () => setLoginOpen(false);
  const handleSignupClose = () => setSignupOpen(false);
  const signUpHandler = () => setSignupOpen(true);
  const loginHandler = () => setLoginOpen(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: "#8F3013" }}>
          <Button
            style={{ textDecoration: "none", color: "white" }}
            onClick={signUpHandler}
          >
            Sign-up
            <Signup handleClose={handleSignupClose} open={signinOpen} />
          </Button>
          <Button
            style={{ textDecoration: "none", color: "white" }}
            onClick={loginHandler}
          >
            Login
            <Login handleClose={handleLoginClose} open={loginOpen} />
          </Button>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/searchPage"
          >
            Search
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LoggedOutNavbar;

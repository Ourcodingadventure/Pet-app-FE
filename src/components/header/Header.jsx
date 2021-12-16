import { Paper } from "@mui/material";
import React from "react";
// import logo from "../../images/logo.png";
import LoggedOutNavBar from "./LoggedOutNavBar";
import LoggedInNavBar from "./LoggedInNavBar";
import { useContext } from "react";
import { GlobalState } from "../../Context/Context";
function Header() {
  const { user } = useContext(GlobalState);
  let message = !user
    ? `Welcome to Our Pet Adoption Agency Please Sign-in`
    : `Hello ${user.firstName} ${user.lastName} Welcome to Adopt-A-Pet, the finest pet adoption agency in the east become a pet owner today from our wide assortment of pets`;
  return (
    <>
      {user ? <LoggedInNavBar /> : <LoggedOutNavBar />}
      <Paper
        style={{
          margin: "0",
          padding: ".5rem",
          fontSize: "50px",
          display: "flex",
          opacity: 0.5,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0 0 15px 15px",
        }}
        elevation={3}
      >
        <div>{message}</div>
      </Paper>
    </>
  );
}

export default Header;

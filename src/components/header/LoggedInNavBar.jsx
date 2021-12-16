import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { GetProfile, profileSignOut } from "../../lib/lib";

import { GlobalState } from "../../Context/Context";

function LoggedInNavBar() {
  const { user, setUser } = useContext(GlobalState);
  const { admin, setAdmin } = useContext(GlobalState);
  const { setProfile, setLoading } = useContext(GlobalState);
  const signOutHandlder = async () => {
    try {
      setLoading(true);
      await profileSignOut();
      setUser(false);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };
  const profileHandler = async () => {
    try {
      setLoading(true);
      const response = await GetProfile();
      setProfile(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    profileHandler();
  }, []);
  if (user.role === "admin") {
    setAdmin(true);
  } else {
    setAdmin(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: "#8F3013" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", paddingLeft: 5 }}
            to="/profile"
            onClick={profileHandler}
          >
            Profile
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", paddingLeft: 5 }}
            to="/searchPage"
          >
            Search
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", paddingLeft: 5 }}
            to="/myPetPage"
          >
            My Pets
          </Link>
          {admin ? (
            <>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingLeft: 5,
                }}
                to="/admin"
              >
                Admin
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingLeft: 5,
                }}
                to="/add-pet"
              >
                Add A Pet
              </Link>
            </>
          ) : null}
          <Button
            style={{ textDecoration: "none", color: "white", paddingLeft: 15 }}
            onClick={signOutHandlder}
          >
            Sign-out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LoggedInNavBar;

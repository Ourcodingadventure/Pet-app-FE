import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "../pages/Home";
import SearchPage from "../pages/UserPages/SearchPage";
import Header from "../components/header/Header";
import PetPage from "../pages/UserPages/PetPage";
import MyPetPage from "../pages/UserPages/MyPetPage";
import Profile from "../pages/UserPages/Profile";
import AdminHome from "../pages/AdminPages/AdminHome";
import UserContactPage from "../pages/AdminPages/UserContactPage";
import AddAPet from "../pages/AdminPages/AddPet";
import EditPet from "../pages/AdminPages/EditPet";
import { GlobalState } from "../Context/Context";
import OverLay from "../components/OverLay";
axios.defaults.withCredentials = true;
function AppRouter() {
  const { user, setUser, setSavedPets, admin, change, loading, setLoading } =
    useContext(GlobalState);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/user/pets`);
      setUser(response.data.user);
      setSavedPets(response.data.userSavedPets);
      // user , user.cart , savedPets
    } catch (err) {
      console.log(err.response);
      setUser(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  useEffect(() => {
    getUser();
  }, [change]);

  return (
    <BrowserRouter>
      {/* Make a pretty loader component of overlay which doesnt let the user click until the response is not arrived from the api */}

      <OverLay visible={loading} />
      <Header />

      <Routes>
        {!user ? (
          <>
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/petPage/:id" element={<PetPage />} />
          </>
        ) : (
          <>
            <Route path="/profile" element={<Profile />}></Route>
            <Route exact path="/" element={<Home />} />
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/petPage/:id" element={<PetPage />} />
            <Route path="/myPetPage" element={<MyPetPage />} />
            {admin ? (
              <>
                <Route path="/admin" element={<AdminHome />} />{" "}
                <Route path="/userPage/:id" element={<UserContactPage />} />
                <Route path="/add-pet" element={<AddAPet />} />
                <Route path="/edit-pet/:id" element={<EditPet />} />
              </>
            ) : null}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

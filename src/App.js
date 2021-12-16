import { useState } from "react";
import { GlobalState } from "./Context/Context";
import AppRouter from "./Routing/Router";

function App() {
  const [user, setUser] = useState(false);
  const [pet, setPet] = useState(false);
  const [savedPets, setSavedPets] = useState(false);
  const [profile, setProfile] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <GlobalState.Provider
      value={{
        user,
        setUser,
        pet,
        setPet,
        savedPets,
        setSavedPets,
        profile,
        setProfile,
        admin,
        setChange,
        setAdmin,
        change,
        loading,
        setLoading,
      }}
    >
      <AppRouter
        user={user}
        setUser={setUser}
        savedPets={savedPets}
        setSavedPets={setSavedPets}
        admin={admin}
        change={change}
        loading={loading}
        setLoading={setLoading}
      />
    </GlobalState.Provider>
  );
}

export default App;

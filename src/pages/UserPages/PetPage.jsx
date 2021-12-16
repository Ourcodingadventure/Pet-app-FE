import { Button, Paper } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../Context/Context";
import { getPetById, serverURL } from "../../lib/lib";

function PetPage() {
  const { admin, pet, setPet, setLoading } = useContext(GlobalState);
  const params = useParams();

  const myPet = async () => {
    try {
      setLoading(true);
      const response = await getPetById(params.id);
      setPet(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    myPet();
  }, []);
  console.log("pet");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: ".7",
      }}
    >
      <Paper style={{ width: "500px" }}>
        <div style={{ display: "flex" }}>
          <img src={`${serverURL}/${pet.picture}`} alt="pet here" />
          <div>
            <h1 style={{ paddingLeft: "100px" }}> {pet.petName}</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h4 style={{ margin: "0" }}>{pet.breed} </h4>
              <h4 style={{ margin: "0" }}>{pet.color}</h4>
            </div>
            <div>
              <h5 style={{ paddingLeft: 5 }}>
                Dietary Restrictions: {pet.dietaryRestrictions}
              </h5>

              <div style={{ margin: 0, padding: 5 }}>
                Height:{pet.height}cm Weight:{pet.weight}kg
              </div>
              <div style={{ padding: 5 }}>{pet.adoptionStatus}</div>
            </div>
            <h5 style={{ padding: 5 }}>A Little About me: {pet.bio}</h5>
            {admin ? (
              <Button>
                <Link
                  style={{ textDecoration: "none", color: "#8F3013" }}
                  to={`/edit-pet/${params.id}`}
                >
                  Edit Pet
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default PetPage;

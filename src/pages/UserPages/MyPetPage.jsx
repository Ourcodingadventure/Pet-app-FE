import { Button, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import AppCard from "../../components/Card";
import { GlobalState } from "../../Context/Context";

function MyPetPage() {
  const [fostered, setFostered] = useState(false);
  const { user } = useContext(GlobalState);
  const { savedPets } = useContext(GlobalState);

  function Toggle() {
    return (
      <div>
        <Button
          style={
            !fostered
              ? {
                  background: "lightgray",
                  color: "black",
                  fontSize: "1em",
                  fontWeight: "bold",
                }
              : { color: "#8F3013", fontSize: "1.2em", fontWeight: "bold" }
          }
          disabled={fostered ? false : true}
          onClick={() => setFostered(false)}
        >
          Adopted
        </Button>
        <Button
          style={
            fostered
              ? {
                  background: "lightgray",
                  color: "black",
                  fontSize: "1em",
                  fontWeight: "bold",
                }
              : { color: "#8F3013", fontSize: "1em", fontWeight: "bold" }
          }
          disabled={!fostered ? false : true}
          onClick={() => setFostered(true)}
        >
          SavedPet
        </Button>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        style={{
          width: "18%",
        }}
      >
        {Toggle()}
      </Paper>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fostered ? (
          <>
            {user.cart.length
              ? user?.cart?.map((pet) => {
                  console.log("pet:", pet.petId);
                  console.log(pet);
                  return (
                    <AppCard
                      key={pet.petId._id}
                      id={pet.petId._id}
                      name={pet.petId.petName}
                      imageUrl={pet.petId.picture}
                      bio={pet.petId.bio}
                      breed={pet.petId.breed}
                      adoptionStatus={pet.petId.adoptionStatus}
                    />
                  );
                })
              : "You dont have Pet saved in cart"}
          </>
        ) : (
          <>
            {savedPets.length
              ? savedPets.map((pet) => {
                  return (
                    <AppCard
                      key={pet._id}
                      id={pet._id}
                      name={pet.petName}
                      imageUrl={pet.picture}
                      bio={pet.bio}
                      breed={pet.breed}
                      adoptionStatus={pet.adoptionStatus}
                    />
                  );
                })
              : "You don't have any pet, We have amazing pets, go to this link... and adopt one now...."}
          </>
        )}
      </div>
    </div>
  );
}

export default MyPetPage;

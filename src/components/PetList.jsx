import React from "react";
import AppCard from "./Card";
function PetList({ data }) {
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((pet) => (
        <AppCard
          key={pet._id}
          name={pet.petName}
          imageUrl={pet.picture}
          bio={pet.bio}
          id={pet._id}
          breed={pet.breed}
          adoptionStatus={pet.adoptionStatus}
        />
      ))}
    </div>
  );
}

export default PetList;

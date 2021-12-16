import { Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AppCard from "../../components/Card";
import { GlobalState } from "../../Context/Context";
import { getPets, getUser } from "../../lib/lib";

function UserContactPage() {
  const { setLoading } = useContext(GlobalState);
  const [person, setPerson] = useState(null);
  const [owned, setOwned] = useState(null);
  const params = useParams();
  const myUser = async () => {
    try {
      setLoading(true);
      const response = await getUser(params.id);
      let obj = {
        userID: params.id,
      };
      const pets = await getPets(obj);
      setPerson(response);
      setOwned(pets);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    myUser();
  }, []);
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        padding: 30,
        overflow: "hidden",
        borderRadius: 10,
        width: 350,
        margin: "auto",
        alignSelf: "center",
        opacity: ".8",
      }}
      el
    >
      {person ? (
        <>
          {" "}
          <div>
            {person.firstName} {person.lastName}
          </div>
          <div>{person.email}</div>
          <div>{person.phoneNumber}</div>
          <div>{person.role}</div>{" "}
          {owned.length
            ? owned.map((pet) => {
                <AppCard
                  key={pet._id}
                  id={pet._id}
                  name={pet.name}
                  imageUrl={pet.picture}
                  bio={pet.bio}
                  breed={pet.breed}
                  adoptionStatus={pet.adoptionStatus}
                />;
              })
            : null}
        </>
      ) : null}
    </Paper>
  );
}

export default UserContactPage;

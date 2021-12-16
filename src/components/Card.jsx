import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";
import {
  addToCart,
  changePetStatus,
  deleteFromCart,
  returnPet,
  serverURL,
} from "../lib/lib";

export default function AppCard({
  name,
  imageUrl,
  bio,
  breed,
  id,
  adoptionStatus,
}) {
  const { user, setChange, change, setLoading } = useContext(GlobalState);
  console.log("adoption state", adoptionStatus);
  const addOrRemoveBtn = () => {
    let savedPet = false;
    user?.cart?.map((value) => {
      if (value.petId._id === id) {
        savedPet = true;
      }
    });
    if (user) {
      if (savedPet) {
        return (
          <Button
            onClick={deleteHandler}
            style={{ color: "#8F3013" }}
            size="small"
          >
            Remove From Cart
          </Button>
        );
      } else {
        return (
          <Button onClick={savePet} style={{ color: "#8F3013" }} size="small">
            Add To Cart
          </Button>
        );
      }
    } else {
      return "";
    }
  };
  const returnStatus = async () => {
    try {
      const response = await returnPet(id);
    } catch (err) {
      console.log(err);
    } finally {
      setChange(!change);
    }
  };
  const adoptOrFoster = async (status) => {
    try {
      setLoading(true);
      const response = await changePetStatus(id, status);
    } catch (err) {
      console.log(err);
    } finally {
      setChange(!change);

      setLoading(false);
    }
  };
  const adoptFosteredBtn = () => {
    if (adoptionStatus === "ready for adoption") {
      console.log("ready for adoption foastered conidtion", name);
      return (
        <>
          <Button
            onClick={() => adoptOrFoster("adopted")}
            style={{ color: "#8F3013" }}
            size="small"
          >
            Adopt
          </Button>
          <Button
            onClick={() => adoptOrFoster("fostered")}
            style={{ color: "#8F3013" }}
            size="small"
          >
            Foster
          </Button>
        </>
      );
    } else if (adoptionStatus === "fostered") {
      console.log("rendered foastered conidtion", name);
      return (
        <>
          <Button
            onClick={() => returnStatus()}
            style={{ color: "#8F3013" }}
            size="small"
          >
            Return
          </Button>
          <Button
            onClick={() => adoptOrFoster("adopted")}
            style={{ color: "#8F3013" }}
            size="small"
          >
            Adopt
          </Button>
        </>
      );
    } else {
      console.log("adopted foastered conidtion", name);
      return (
        <Button
          onClick={() => returnStatus()}
          style={{ color: "#8F3013" }}
          size="small"
        >
          Return
        </Button>
      );
    }
  };
  const savePet = async () => {
    try {
      setLoading(true);
      let payload = {
        cart: { petId: id },
      };
      let response = await addToCart(user._id, payload);
      console.log(response);
      setChange(!change);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const deleteHandler = async () => {
    try {
      setLoading(true);

      const payload = {
        cart: { petId: id },
      };

      let response = await deleteFromCart(user._id, payload);

      setChange(!change);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      style={{
        display: "flex",
        opacity: "0.7",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 10,
        width: "390px",
      }}
      sx={{ maxWidth: 500 }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        style={{ height: 122, width: 86 }}
        image={`${serverURL}/${imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name || "Jack"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio ||
            `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {breed || `Lizard`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {adoptionStatus || `???`}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button style={{ color: "#8F3013" }} size="small">
            <Link
              style={{ textDecoration: "none", color: "#8F3013" }}
              to={`/petPage/${id}`}
            >
              Learn More
            </Link>
          </Button>
          {adoptFosteredBtn()}
          {addOrRemoveBtn()}
        </div>
      </CardActions>
    </Card>
  );
}

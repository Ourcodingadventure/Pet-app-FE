import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function UserCard({
  firstName,
  lastName,
  role,
  email,

  id,
}) {
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button style={{ color: "#8F3013" }} size="small">
            <Link
              style={{ textDecoration: "none", color: "#8F3013" }}
              to={`/userPage/${id}`}
            >
              More Info
            </Link>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

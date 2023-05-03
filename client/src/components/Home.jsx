import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        width: "500px",
        textAlign: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h2>Welcome to AADHAR Enrollment App</h2>
      <Button
        onClick={() => navigate("/login", { state: "admin" })}
        variant="contained"
        size="large"
        sx={{ marginBottom: "100px" }}
      >
        Admin Login
      </Button>
      <Button
        onClick={() => navigate("/login")}
        variant="contained"
        size="large"
      >
        User Login
      </Button>
    </Box>
  );
};

export default Home;

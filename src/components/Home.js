import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/counter");
        }}>
        Counter
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/form");
        }}>
        form
      </Button>
    </>
  );
};

export default Home;

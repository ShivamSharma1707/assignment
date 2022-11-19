import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ marginTop: "5%", marginLeft: "29%" }}>
        This Application is made for Tubelight communication
      </h1>
      <div style={{ marginTop: "15%", marginLeft: "40%" }}>
        <Button
          style={{ marginRight: "2%" }}
          variant="contained"
          onClick={() => {
            navigate("/counter");
          }}>
          Counter Application
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/form");
          }}>
          Controlled Form
        </Button>
      </div>
    </>
  );
}

export default Home;

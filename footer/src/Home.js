import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "blue",
      }}
    >
      <h1>HomeComponent</h1>
      <button onClick={() => navigate("/tool")}> click me</button>
    </div>
  );
};

export default Home;

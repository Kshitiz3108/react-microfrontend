import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
      <Link to={"/app/footer"}>to footer</Link>
      <button onClick={() => navigate("../footer")}> click me</button>
    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="content-center">
        <h1>THIN</h1>
        <h1>CRAST PIZZA</h1>
        <button onClick={() => navigate("/menu")}>LET ME SEE THE MENU</button>
      </div>
      <div className="open-hours">
        <h3>OPEN FROM 10AM TO 12PM</h3>
      
      </div>
    </div>
  );
};

export default Home;
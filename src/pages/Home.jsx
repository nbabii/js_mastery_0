import React from "react";
import { useNavigate } from "react-router-dom";

import "../App.css"; 
import "../Home.css";


const Home = () => {
  return (
    <div className="home-page">
      <div className="content-center">
        <h1>THIN</h1>
        <h1>CRUST PIZZA</h1>
        <button>
          <a href="#menu">LET ME SEE THE MENU</a>
        </button>
      </div>
      <div className="open-hours">
        <h3>OPEN FROM 10AM TO 12PM</h3>
      </div>
    </div>
  );
};

export default Home;
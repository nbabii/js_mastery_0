import React from 'react';
import aboutImage from "../assets/about.png";
import aboutSmallImage from "../assets/about-small.png";
import "../App.css"; 
import "../About.css"; 


const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About</h1>
      <p className="about-description">
        The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <div className="chef-section">
  <div className="chef-section-text">
    <p className="about-chef">The Chef? Mr. Italiano himself.</p>
    <p className="about-pride">We are proud of our interiors.</p>
  </div>
  <div className="chef-section-img">
    <img src={aboutSmallImage} alt="Chef" className="about-small-image" />
  </div>
</div>
       <img src={aboutImage} alt="Restaurant Interior" className="interior-image" />
      <h2 className="opening-hours-title">Opening Hours</h2>
      <div className="opening-hours">
        <div className="opening-hours-section">
          <p className="opening-hours-day">Mon & Tue Closed</p>
          <p className="opening-hours-day">Wednesday 10:00 - 24:00</p>
          <p className="opening-hours-day">Thursday 10:00 - 24:00</p>
        </div>
        <div className="opening-hours-section">
          <p className="opening-hours-day">Friday 10:00 - 12:00</p>
          <p className="opening-hours-day">Saturday 10:00 - 23:00</p>
          <p className="opening-hours-day">Sunday Closed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
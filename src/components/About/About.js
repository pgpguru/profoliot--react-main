import React from "react";
import "./about.css";
import Picture from "./image0-26.gif";





function About() {
  return (
    <div className="about-card">
    <div className="about-content">
      <div class="row">  
        <div class="col-lg-4">
          <div className="img-container">
            <img src={Picture} alt="Picture"  />
          </div>
        </div>
        <div class="col-lg-8">
          <h3>
              <p>PGPGURU preety good privacy :) </p>
              <br></br>
          </h3>
          <h4>  
              <p>I make stuff.</p> 
              <p>cool stuff </p>
              <p>stuff in computers </p>
          </h4>
        </div>
      </div>
    </div>
  </div>
    
    
    
    
    

  );
}

export default About;

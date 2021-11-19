import React from "react";
import "./jumbotron.css";




function Jumbotron() {
      return (
      <div class="jumbotron">
          <div class="jumbotron-text">
              <h4>
                <b>Email:</b> <a href="mailto:someone@example.com">PGPGURU@TUNOTIA.RU</a>
                <br></br>
                <b>Mobile:</b> +0x1A4
              </h4>
        <div class="row">
            <div class="row">
                <div class="col-md-4">
                  <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://github.com/pgpguru" role="button">Github</a>
                  </p>
                </div>
                
                <div class="col-md-4">
                  <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://www.minecraftmaps.com/images/jdownloads/screenshots/troll.png" role="button">Linkedin [COMING SOON]</a>
                  </p>
                </div>
      
                <div class="col-md-4">
                  <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://www.minecraftmaps.com/images/jdownloads/screenshots/troll.png" role="button">RESUME COMING SOON</a>
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>


  
    )
  }

export default Jumbotron;
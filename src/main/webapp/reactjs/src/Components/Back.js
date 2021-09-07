import React from "react";

import "./background.css";
import log from '../images/log.png';

class Back extends React.Component {
  


  render() {
    
    return (
      
        <div class="banner-area d-block mx-auto">
          <div class="content-area">
            <div class="content">
                <img src={log} alt="" width="150" />
                <h1>Votre voyage au Maroc commence maintenant</h1>
                
                <p>Découvrez les meilleures photos parmi des milliers de choix de villes maroccaines, </p>
                
                <a class="btn" href="">Découvrez notre Api</a>
            </div>
          </div>
      </div>
      
    );
  }
}

export default Back;
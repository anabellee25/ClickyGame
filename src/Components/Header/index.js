import React from "react";
import "./style.css";

function Header () {
    return (
        <div id="header" className="jumbotron">
          <h1 className="header-font" id="headerInstructions">
            Click on a card to earn points,
          </h1>
          <h1 className="header-font" id="headerInstructions">
            But don't click on any more than once! 
          </h1>    
        </div>

    );
}

export default Header;
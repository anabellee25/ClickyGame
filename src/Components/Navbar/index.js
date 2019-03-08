import React from "react";
import "./style.css";

const Navbar = props => (
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <ul className=" row center list-inline ">
          <li className="col text-center list-inline-item my-auto">
            <a id="navtext" className="nav-calc-font navbar-brand title-line-hgt" href="/"> 
              Sailor Moon
              <br />
              Memory Game 
            </a>        
          </li>
          <img id="logo" src="https://res.cloudinary.com/sailormoon-clicky-game/image/upload/v1552013873/logo.png" alt="logo" />
          <li id="animatedMessage" className="list-inline-item text-center my-auto">
          {/* className="list-inline-item my-auto score-li-width text-center */}
            {props.message}
          </li>

          <li id="scoreKeeper" className=" list-inline-item my-auto score-li-width text-center">
            Score: {props.score} | Top Score: {props.topScore} 
          </li>
        </ul>
      </nav>
    )


export default Navbar;
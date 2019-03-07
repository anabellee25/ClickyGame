import React from "react";
import "./style.css";

const Navbar = props => (
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <ul className=" row center list-inline nav-fill nav-height nav-width">
          <li className="col text-center list-inline-item my-auto">
            <a className="nav-calc-font navbar-brand title-line-hgt" href="/"> 
              Sailor Moon 
              <br/> 
              Memory Game 
            </a>        
          </li>

          <li id="animatedMessage" className="col list-inline-item my-auto score-li-width text-center">
            {props.message}
          </li>

          <li id="scoreKeeper" className=" list-inline-item my-auto score-li-width text-center">
            SCORE: {props.score} | TOP SCORE: {props.topScore} 
          </li>
        </ul>
      </nav>
    )


export default Navbar;
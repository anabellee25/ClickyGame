import React from "react";
import './App.css';

const Container = props =>
  <div id="cardContainer" className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Container;
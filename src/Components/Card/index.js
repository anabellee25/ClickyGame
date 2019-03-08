import React from "react";
import "./style.css";

const Card = props => (
    <div className="imageCard">
    <img 
    className="image"
    alt={props.name} 
    src={props.image}
    value={props.id}
    onClick={() => props.handleClick(props.id)} />
    </div>
);

export default Card;
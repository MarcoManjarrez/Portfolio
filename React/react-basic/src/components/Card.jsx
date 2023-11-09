import React from "react";
import "./Card.css";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <Avatar src={props.img} />
      <h2>This is a cool dude</h2>
      <h2>{props.name}</h2>
      <h2>{props.phone}</h2>
    </div>
  );
}

export default Card;

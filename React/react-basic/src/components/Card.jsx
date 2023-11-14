import React from "react";
import "./Card.css";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/*<h2>This is a cool dude</h2>*/}
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <div className="bottom">
        <h2 className="info">{props.phone}</h2>
      </div>
    </div>
  );
}

export default Card;

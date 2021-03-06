import React from "react";
import "./FriendCard.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.clickCounter(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
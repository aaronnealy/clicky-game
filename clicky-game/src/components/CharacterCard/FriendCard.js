import React from "react";

import "./style.css";

function FriendCard(props) {
  return (
    <div aria-label="click item" className="card shake">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handleIncrement} />
      </div>
    </div>
  );
}

export default FriendCard;
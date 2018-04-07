//sets up the reusable PartCard component
import React from "react";
import "./PartCard.css";

//pass the image into each card so all 12 are rendered
const PartCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default PartCard;
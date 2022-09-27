import React from "react";
import "./EventCard.css";

const EventCard = ({ image, title, date, venue }) => {
  
  return (
    <div className="card">
      <img src={image} alt="dfghjk" />
      <p>{title}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <div className="btn"> Register now</div>
    </div>
  );
};

export default EventCard;

import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ name, id, image, status, species, location }) => {
  return (
    <div className="character-card">
      <img src={image} className="character-image"></img>
      <div className="character-info">
        <h1 className="character-name">{name}</h1>
        <p>Species: {species} </p>
        <p>Location: {location.name} </p>
        <Link to={`/character/${id}`} className="details-button">Details</Link>
        <span
          className={`badge ${status === "Dead" ? "dead" : ""} ${
            status === "Alive" ? "alive" : ""
          } ${status === "unknown" ? "unknown" : ""}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;

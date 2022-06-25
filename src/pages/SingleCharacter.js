import React from "react";
import Loading from "../components/Loading";
import { useParams, Route } from "react-router-dom";

import "./SingleCharacter.css";

const url = "https://rickandmortyapi.com/api/character/";

const SingleCharacter = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCharacter() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data) {
          const { name, image, status, species, origin, location, episode } =
            data;
          const newCharacter = {
            name,
            image,
            status,
            species,
            origin,
            location,
            episode,
          };
          setCharacter(newCharacter);
        } else {
          setCharacter(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCharacter();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!character) {
    return <h2>No Character to Display</h2>;
  }

  const { name, image, status, species, origin, location, episode } = character;

  const generateEpisodeNumber = (episodeLink) => {
    if (episodeLink.slice(-2) > 9) {
      return episodeLink.slice(-2);
    } else {
      return episodeLink.slice(-1);
    }
  };
  
  return (
    <section className="character-container">
      <h2>{name}</h2>
      <img src={image} alt="character-portrait"></img>
      <div className="character-info-container">
        <p>
          <span className="character-data">Current status: </span>
          {status}
        </p>
        <p>
          <span className="character-data">Species: </span>
          {species}{" "}
        </p>
        <p>
          <span className="character-data">Origin: </span>
          {origin.name}
        </p>
        <p>
          <span className="character-data">Last known location: </span>
          {location.name}
        </p>
        <p>
          <span className="character-data">First appearance in episode: </span>
          {generateEpisodeNumber(episode[0])}
        </p>
      </div>

      
    </section>
  );
};

export default SingleCharacter;

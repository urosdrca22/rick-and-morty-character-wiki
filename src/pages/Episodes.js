import React from "react";
import { useGlobalContext } from "../context";
import "./Episodes.css";

function Episodes() {
  const { episodes } = useGlobalContext();
  return (
    <section className="episodes-container">
      {episodes.map((episode) => {
        return (
          <div key={episode.id} className="episode">
            <h1>
              {" "}
              Title: <span className="episode-title">{episode.name} </span>
            </h1>
            <p>
              {" "}
              Number: <span className="episode-title"> {episode.episode}</span>
            </p>
            <p>
              {" "}
              Air date:{" "}
              <span className="episode-title"> {episode.air_date}</span>
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Episodes;

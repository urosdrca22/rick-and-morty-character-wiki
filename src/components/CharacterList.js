import React from "react";
import CharacterCard from "./CharacterCard";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import "./CharacterList.css"

const CharacterList = () => {
  const { characters, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (characters.length < 1) {
    return <h2>No Characters Matched Your Search Criteria</h2>;
  }
  return (
    <section className="grid-container">
      <div className="characters-grid">
        {characters.map((character) => {
          return <CharacterCard key={character.id} {...character} />
        })}
      </div>
    </section>
  );
};

export default CharacterList;

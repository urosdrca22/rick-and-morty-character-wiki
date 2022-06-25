import React, { useState, useContext, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character/?page=";
const episodesUrl = "https://rickandmortyapi.com/api/episode";




const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${pageNumber}&name=${searchTerm}`);
      const data = await response.json();
      if (data.results) {
        const updatedCharacters = data.results.map((character) => {
          const { id, name, image, status, species, location } = character;
          return { id, name, image, status, species, location };
        });
        setCharacters(updatedCharacters);
      } else {
        setCharacters([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchTerm, pageNumber]);

  const fetchEpisodes = async () => {
    const response = await fetch(episodesUrl);
    const data = await response.json();
    const updatedEpisodes = data.results.map((episodeInfo) => {
      const { id, name, air_date, episode } = episodeInfo;
      return { id, name, air_date, episode };
    });
    setEpisodes(updatedEpisodes);
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);


  return (
    <AppContext.Provider
      value={{
        loading,
        characters,
        setSearchTerm,
        pageNumber,
        setPageNumber,
        episodes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

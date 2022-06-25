import React from "react";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchForm";
import "./Home.css"

const Home = () => {
  return (
    <main>
      <h1 className="title">Rick and Morty Characters Wiki</h1>
      <SearchForm />
      <CharacterList />
      <Pagination />
    </main>
  );
};

export default Home;

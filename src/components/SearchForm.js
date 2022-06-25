import React from "react";
import { useGlobalContext } from "../context";

import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setPageNumber } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCharacter = () => {
    setPageNumber(1);
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="searchFormContainer">
      <form className="searchForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          {" "}
          <input 
            type="text"
            id="name"
            placeholder="Search for a character"
            ref={searchValue}
            onChange={searchCharacter}
          />
        </label>
      </form>
    </section>
  );
};

export default SearchForm;

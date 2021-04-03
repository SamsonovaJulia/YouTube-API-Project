import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({
  handleFormSubmit,
  searchBarName,
  buttonName,
  inputPlaceholder,
  buttonClassName,
}) => {
  const [term, setTerm] = useState("");

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(term.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchBarWrapper">
        <label htmlFor="video-search">{searchBarName}</label>
        <input
          onChange={(event) => {
            handleOnChange(event);
          }}
          id="video-search"
          type="text"
          placeholder={inputPlaceholder}
          value={term}
        />
        <button
          className={buttonClassName}
          onClick={handleSubmit}
          disabled={!term.trim()}
        >
          {buttonName}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

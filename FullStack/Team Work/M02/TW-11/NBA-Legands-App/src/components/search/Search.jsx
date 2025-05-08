import React from "react";
import "./Search.scss";
const Search = ({ search, setSearch }) => {
  return (
    <div className="inputDiv">
      <input
        type="text"
        placeholder="Search Player..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;

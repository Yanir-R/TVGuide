import React from "react";

export const SearchBar: React.FC<any> = ({ search, setSearch, searchShow }) => {
  return (
    <div>
      <h1>SearchBar</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => searchShow()}>search</button>
    </div>
  );
};

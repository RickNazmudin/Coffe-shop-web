import React from "react";
import "./Search.css";
function Search({ setSearchValue }) {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="cari produk"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;

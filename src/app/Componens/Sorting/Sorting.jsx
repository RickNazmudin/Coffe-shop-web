import React from "react";
import "./Sorting.css";
function Sorting({ setSortValue }) {
  return (
    <div className="Sorting">
      <select onChange={(e) => setSortValue(e.target.value)}>
        <option value="">pilih urutan</option>
        <option value="asc">harga terendah</option>
        <option value="desc">harga tertinggi</option>
        <option value="alpha">abjad A-Z</option>
      </select>
    </div>
  );
}

export default Sorting;

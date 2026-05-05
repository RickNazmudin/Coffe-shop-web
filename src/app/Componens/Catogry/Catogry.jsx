import React from "react";
import "./Catogry.css";
function Catogry({ AllCatogry, setCatogryValue }) {
  return (
    <div className="Catogry">
      {AllCatogry.map((btn) => {
        return (
          <button key={btn} onClick={() => setCatogryValue(btn)}>
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default Catogry;

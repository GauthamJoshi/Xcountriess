// Countries Component
import React from "react";
import "./countries.css";

export default function Countries({Data}) {
  return (
    <div className="countryCard">
      <div>
        <img
          src={Data.flag}
          alt={Data.name}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <h2>{Data.name}</h2>
    </div>
  );
}
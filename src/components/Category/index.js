import React from "react";
import { Link } from "wouter";

export default function Category({ name, options = [] }) {
  return (
    <div className="Category">
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption) => (
          <li key={singleOption} className="Category-Item">
            <Link to={`/search/${singleOption}`}>{singleOption}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

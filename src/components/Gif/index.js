import React from "react";
import { Link } from "wouter";
import "styles/gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-Link">
        <img alt={title} src={url} />
        <div className="Gif-Title-box">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

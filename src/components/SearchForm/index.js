import React, { useState } from "react";
import "styles/SearchForm.css";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    onSubmit({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="Search-form">
      <input
        className="Search-input"
        placeholder="Busca un gif aqui..."
        onChange={handleChange}
        value={keyword}
        type="text"
      />
      <button className="Search-btn">Buscar</button>
    </form>
  );
}

export default React.memo(SearchForm);

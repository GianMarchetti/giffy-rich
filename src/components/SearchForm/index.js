import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Busca un gif aqui..."
        onChange={handleChange}
        value={keyword}
        type="text"
      />
      <button>Buscar</button>
    </form>
  );
}

export default React.memo(SearchForm);

import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SearchForm";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";

export default function Home() {
  const { gifs } = useGifs();
  const [path, pushLocation] = useLocation();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <h1>Giffy Rich</h1>
      <SearchForm onSubmit={handleSubmit} />
      <div>
        <ListOfGifs gifs={gifs} />
      </div>
      <div>
        <TrendingSearches />
      </div>
    </>
  );
}

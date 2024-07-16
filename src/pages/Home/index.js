import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SearchForm";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Home | Giffy Rich</title>
        <meta name="description" content="Home of Giffy Rich" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <link rel="canonical" href="https://giffy-rich.vercel.app/" />
      </Helmet>
      <header>
        <h1 className="App-title">Giffy Rich</h1>
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <div className="App-main">
        <ListOfGifs gifs={gifs} />
        <TrendingSearches />
      </div>
    </>
  );
}

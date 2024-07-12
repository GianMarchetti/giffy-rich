import GifsContext from "context/GifsContext";
import React, { useContext } from "react";
import Gif from "components/Gif";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return <Gif {...gif} />;
}

import React from "react";
import { Redirect } from "wouter";
import Gif from "components/Gif";
import Loader from "components/Loader";
import useSingleGif from "hooks/useSingleGif";
import "styles/Detail.css";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : "";

  if (isLoading) return <Loader />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Detail of ${title}`} />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <link
          rel="canonical"
          href={`https://giffy-rich.vercel.app/${params.id}`}
        />
        <meta property="og:image" content={gif.url} />
        <meta property="og:title" content={gif.title} />
      </Helmet>
      <div className="Detail-section">
        <h3 className="Detail-title">{gif.title}</h3>
        <Gif {...gif} />
      </div>
    </>
  );
}

import React from "react";

export default function GifSearch({ getQuery, searchGif }) {
  return (
    <div>
      <input type="text" onChange={(e) => getQuery(e)} />
      <button onClick={searchGif}>Search Gif</button>
    </div>
  );
}

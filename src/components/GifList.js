import React from "react";

export default function GifList({ gifs }) {
  return (
    <div>
      <h3>Gifs list</h3>
      {gifs.map((gif) => (
        <img src={gif.images.downsized_large.url} alt="" />
      ))}
    </div>
  );
}

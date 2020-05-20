import React from "react";

function GifList({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li>
          <img src={image}></img>
        </li>
      ))}
    </ul>
  );
}

export default GifList;

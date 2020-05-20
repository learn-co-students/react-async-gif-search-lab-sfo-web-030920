import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    images: [],
  };

  fetchGifs = (search = "dolphins") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const [first, second, third] = data.data.map(
          (gif) => gif.images.original.url
        );

        this.setState({
          images: [first, second, third],
        });
      });
  };

  componentDidMount() {
    this.fetchGifs();
  }

  render() {
    return (
      <div>
        <GifList images={this.state.images} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </div>
    );
  }
}

export default GifListContainer;

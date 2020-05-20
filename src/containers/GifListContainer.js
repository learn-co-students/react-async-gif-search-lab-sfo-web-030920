import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    images: [],
    searchInput: "",
  };

  handleSubmit = (e, searchInput) => {
    e.preventDefault();

    this.fetchGifs(searchInput);
  };

  fetchGifs = (search) => {
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
    this.fetchGifs("dolphins");
  }

  render() {
    return (
      <div>
        <GifList images={this.state.images} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default GifListContainer;

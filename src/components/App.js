import React from "react";

import NavBar from "./NavBar";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

// the App component should render out the GifListContainer component

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      query: "",
      gifs: [],
    };
  }

  getQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  searchGif = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((data) => data.json())
      .then((gifs) => this.setState({ gifs: gifs.data }));
  };
  render() {
    return (
      <div>
        <NavBar color="black" title="Giphy Search" />
        <GifSearch getQuery={this.getQuery} searchGif={this.searchGif} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;

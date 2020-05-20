import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    searchInput: "",
  };

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchGifs(this.state.searchInput);
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button>Search</button>
      </form>
    );
  }
}

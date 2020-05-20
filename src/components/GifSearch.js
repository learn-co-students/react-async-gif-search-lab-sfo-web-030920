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

  render() {
    return (
      <form
        onSubmit={(e) => this.props.handleSubmit(e, this.state.searchInput)}
      >
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

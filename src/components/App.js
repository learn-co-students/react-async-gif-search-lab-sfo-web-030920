import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "../containers/GifListContainer";

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     searchInput: "",
//   };

//   render() {
//     return (
//       <div>
//         <NavBar color="black" title="Giphy Search" />
//         <GifListContainer searchInput={this.state.searchInput} />
//       </div>
//     );
//   }
// }

export default App;

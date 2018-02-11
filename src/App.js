import React, { Component } from "react";
import Leaderboard from "./containers/Leaderboard/Leaderboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Leaderboard />
      </div>
    );
  }
}

export default App;

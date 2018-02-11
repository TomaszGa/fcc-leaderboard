import React, { Component } from "react";
import axios from "axios";

class Leaderboard extends Component {
  state = {
    leaderboardData: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => {
        console.log(response.data);
        this.setState({
          leaderboardData: response.data
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    let leaderboardEntries = null;
    if (this.state.leaderboardData) {
      leaderboardEntries = this.state.leaderboardData.map(entry => {
        return <p>I got something yo</p>;
      });
    }
    return (
      <div>
        <h1>Leaderboard</h1>
        {leaderboardEntries}
      </div>
    );
  }
}

export default Leaderboard;

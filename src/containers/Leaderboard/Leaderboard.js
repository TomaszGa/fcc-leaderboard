import React, { Component } from "react";
import axios from "axios";

import LeaderboardEntry from "../../components/LeaderboardEntry/LeaderboardEntry";

class Leaderboard extends Component {
  state = {
    leaderboardData: null,
    getRecent: true,
    error: false
  };

  componentDidMount() {
    let url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    if (!getRecent) {
      url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    }
    axios
      .get(url)
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
        return <LeaderboardEntry key={entry.username} data={entry} />;
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

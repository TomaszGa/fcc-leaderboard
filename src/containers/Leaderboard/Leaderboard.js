import React, { Component } from "react";
import axios from "axios";

import LeaderboardEntry from "../../components/LeaderboardEntry/LeaderboardEntry";
import DataSwitchButton from "../../components/DataSwitchButton/DataSwitchButton";
class Leaderboard extends Component {
  state = {
    leaderboardData: null,
    getRecent: true,
    error: false
  };

  fetchLeaderboards() {
    if (
      this.state.leaderboardData &&
      ((this.state.getRecent &&
        this.state.leaderboardData.request.responseURL ===
          "https://fcctop100.herokuapp.com/api/fccusers/top/recent") ||
        (!this.state.getRecent &&
          this.state.leaderboardData.request.responseURL ===
            "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"))
    ) {
      return;
    }
    let url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    if (!this.state.getRecent) {
      url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    }
    axios
      .get(url)
      .then(response => {
        this.setState({
          leaderboardData: response
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  }

  componentDidMount() {
    this.fetchLeaderboards();
  }

  componentDidUpdate() {
    this.fetchLeaderboards();
  }

  handleDataSwitch = () => {
    this.setState(prevState => ({
      getRecent: !prevState.getRecent
    }));
  };

  render() {
    let leaderboardEntries = null;
    if (this.state.leaderboardData) {
      leaderboardEntries = this.state.leaderboardData.data.map(entry => {
        return <LeaderboardEntry key={entry.username} data={entry} />;
      });
    }
    return (
      <div>
        <h1>Leaderboard</h1>
        <DataSwitchButton click={this.handleDataSwitch} />
        {leaderboardEntries}
      </div>
    );
  }
}

export default Leaderboard;

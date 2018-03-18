import React, { Component } from "react";
import axios from "axios";

import LeaderboardEntry from "../../components/LeaderboardEntry/LeaderboardEntry";
import DataSwitchButton from "../../components/DataSwitchButton/DataSwitchButton";

import "./Leaderboard.css";

const url = {
  recent: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
  allTime: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
};

class Leaderboard extends Component {
  state = {
    leaderboardData: null,
    getRecent: true,
    error: false
  };

  fetchLeaderboards(url) {
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
    this.fetchLeaderboards(url.recent);
  }

  handleDataSwitch = () => {
    if (this.state.getRecent) {
      this.fetchLeaderboards(url.recent);
    } else {
      this.fetchLeaderboards(url.allTime);
    }
    this.setState(prevState => ({
      getRecent: !prevState.getRecent
    }));
  };

  render() {
    let leaderboardEntries = null;
    let count = 0;
    if (this.state.leaderboardData) {
      leaderboardEntries = this.state.leaderboardData.data.map(entry => {
        count++;
        return (
          <LeaderboardEntry key={entry.username} data={entry} count={count} />
        );
      });
    }
    return (
      <div>
        <h1>Leaderboard</h1>
        <DataSwitchButton
          click={this.handleDataSwitch}
          getRecent={this.state.getRecent}
        />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th onClick={this.handleDataSwitch}>Recent</th>
              <th onClick={this.handleDataSwitch}>All time</th>
              <th>Last Received At</th>
            </tr>
          </thead>
          <tbody>{leaderboardEntries}</tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;

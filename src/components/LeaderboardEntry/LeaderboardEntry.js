import React from "react";
import "./LeaderboardEntry.css";
function leaderboardEntry(props) {
  return (
    <div className="leaderboard-entry">
      <p>{props.data.username}</p>
    </div>
  );
}

export default leaderboardEntry;

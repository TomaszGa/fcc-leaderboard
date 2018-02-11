import React from "react";
import "./LeaderboardEntry.css";
function leaderboardEntry(props) {
  console.log(props.data);
  return (
    <div className="leaderboard-entry">
      <p>Am entry</p>
    </div>
  );
}

export default leaderboardEntry;

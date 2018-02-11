import React from "react";
function leaderboardEntry(props) {
  return (
    <tr>
      <td>{props.count}</td>
      <td>
        <img src={props.data.img} />
        <a href="">{props.data.username}</a>
      </td>
      <td>{props.data.recent}</td>
      <td>{props.data.alltime}</td>
      <td>
        {props.data.lastUpdate.slice(0, 10)} at{" "}
        {props.data.lastUpdate.slice(12, 16)}
      </td>
    </tr>
  );
}

export default leaderboardEntry;

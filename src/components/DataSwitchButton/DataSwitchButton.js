import React from "react";

function dataSwitchButton(props) {
  return (
    <button onClick={props.click}>
      Get {props.getRecent ? "all time results" : "recent results"}
    </button>
  );
}

export default dataSwitchButton;

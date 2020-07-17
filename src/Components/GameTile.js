import React from "react";
import ".././styles.css";

const GameTile = props => {
  return (
    <div onClick={props.onClickFunction(props.key)} className={props.className}>
      <h1>{props.dinkle}</h1>
    </div>
  );
};

export default GameTile;

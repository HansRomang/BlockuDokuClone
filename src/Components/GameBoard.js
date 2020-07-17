// import React, { useState } from "react";
// import GameTile from "./GameTile";
// import ".././styles.css";

// const GameBoard = props => {
//   const tiles = [];
//   for (let i = 0; i < 81; i++) {
//     tiles[i] = { activeState: false };
//   }
//   //console.log(tiles);
//   const [currentTiles, setTiles] = useState(tiles);

//   //console.log(currentTiles[0].activeState);

//   const onClickFunction = id => {
//     console.log(tiles[id].activeState);
//     // if (tiles[id].activeState === false) {
//     //   tiles[id].activeState = true;
//     //   //console.log(tiles[index].activeState);
//     //   setTiles(prevTiles => (prevTiles[id].activeState = true));
//     //   console.log(currentTiles[id]);
//     // }
//   };

//   const tileItems = tiles.map((activated, index) => (
//     <GameTile
//       activated={activated.activeState}
//       key={index}
//       onClickFunction={onClickFunction}
//       className={activated.activeState ? "activated-tile" : "unactivated-tile"}
//       dinkle={activated.activeState}
//     />
//   ));
//   return <div className="board">{tileItems}</div>;
// };

// export default GameBoard;

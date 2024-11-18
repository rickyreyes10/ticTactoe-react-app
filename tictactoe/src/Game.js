import React, { useState } from "react";
import GameGrid from "./GameGrid";

// TODO: Import useState() hook

function Game() {

   // TODO: Replace variables with state variables
   const [moves, setMoves] = useState(new Array(9).fill(""));
   const [turn, setTurn] = useState("X"); //initialize turn state with X

   //add funciton to check for winner
   function checkWinner(squares) {
      const lines = [
         [0, 1, 2], // rows
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6], // columns
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8], // diagonals
         [2, 4, 6]
      ];

      for (let line of lines) {
         const [a, b, c] = line;
         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
         }
      }
      return null;
   }

   // Add function to check if board is full
   function isBoardFull(squares) {
      return squares.every(square => square !== "");
   }

   //updated gridClick to handle moves
   function gridClick(whichSquare) {
      // TODO: Replace with code to set the move and turn
      if (moves[whichSquare] === "") {
         const movesCopy = [...moves];
         movesCopy[whichSquare] = turn;
         setMoves(movesCopy);

         //toggle turn between X and O
         // condition turn === "X" ... if this is true, set turn to "O"
         // if condition is false, set turn to "X"
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // TODO: Add newGame() function here
   function newGame() {
      setMoves(new Array(9).fill(""));
      setTurn("X");
   }

   //determine game status
   const winner = checkWinner(moves);
   const isGameOver = winner || isBoardFull(moves);

   let status;
   if (winner) {
      status = <strong className={winner}>{winner} Wins!</strong>;
   } else if (isBoardFull(moves)) {
      status = <strong>Draw Game!</strong>;
   } else {
      status = <>Turn: <strong className={turn}>{turn}</strong></>;
   }

   // TODO: Make New Game button to call newGame() when clicked
   return (
      <>
         <h1>Tic-Tac-Toe</h1>
         <GameGrid moves={moves} click={gridClick} />
         <p>{status}</p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;
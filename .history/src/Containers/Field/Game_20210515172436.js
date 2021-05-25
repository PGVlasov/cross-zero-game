import React from "react";
import { useEffect, useState } from "react";
import _ from "lodash";
import "./Field1.css";

function generateInitialBoard() {
  const rows = [];

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let i = 0; i < 10; i++) {
      row.push(null);
    }

    rows.push(row);
  }
  return rows;
}

function move(step, board, row, column) {
  const newBoard = _.cloneDeep(board);
  newBoard[row][column] = step;

  return newBoard;
}

function checkWinner(step, board, lastRow, lastColumn) {
  let winner = "winner";
  const winnerCellNumber = 5;

  return (
    checkWinnerLeftToRight(
      step,
      board,
      winnerCellNumber,
      lastRow,
      lastColumn
    ) ||
    topToBottom(board, winnerCellNumber, lastRow, lastColumn) ||
    leftBottomRightTop(board, winnerCellNumber, lastRow, lastColumn) ||
    leftTopRightBottom(board, winnerCellNumber, lastRow, lastColumn)
  );
}

function checkWinnerLeftToRight(
  step,
  board,
  winnerCellNumber,
  lastRow,
  lastColumn
) {
  const boardSizeX = board[0].length;
  const leftBorder =
    lastColumn - winnerCellNumber < 0 ? 0 : lastColumn - winnerCellNumber + 1;

  const rightBorder =
    lastColumn + winnerCellNumber > boardSizeX
      ? boardSizeX
      : lastColumn + winnerCellNumber - 1;

  const row = board[lastRow];

  let numberOfSameCellRight = 1;
  for (let i = leftBorder; i < rightBorder; i++) {
    if (row[i] === step) {
      numberOfSameCellRight += 1;
    } else {
      numberOfSameCellRight += 0;
    }
    if (numberOfSameCellRight === winnerCellNumber) {
      return console.log(`${step} is winner`);
    }
  }
  let numberOfSameCellLeft = 1;
  for (let j = rightBorder; j > leftBorder; j--) {
    if (row[j] === step) {
      numberOfSameCellLeft += 1;
    } else {
      numberOfSameCellLeft += 0;
    }
    if (numberOfSameCellLeft === winnerCellNumber) {
      return console.log(`${step} is winner`);
    }
  }
}
// const hasWinner = checkWinnerLeftToRight(
//   "X",
//   board,
//   winnerCellNumber,
//   lastRow,
//   lastColumn
// );
//   console.log("Has winner?", hasWinner);
function topToBottom(step, board, winnerCellNumber, lastRow, lastColumn) {
  const boardSizeY = 10;
  const topBorder =
    lastColumn - winnerCellNumber < 0 ? 0 : lastColumn - winnerCellNumber + 1;
  const lowerBorder =
    lastColumn + winnerCellNumber > boardSizeY
      ? boardSizeY
      : lastColumn + winnerCellNumber - 1;
  const row = board[lastRow];
  //for(let.....)
}

function leftBottomRightTop(board, winnerCellNumber, lastRow, lastColumn) {
  const leftStartRow = lastRow - (winnerCellNumber - 2);
  const leftStartRowProcessed = leftStartRow < 0 ? 0 : leftStartRow;
  //console.log(leftStartRowProcessed);
  const rightStartRow = lastRow - (winnerCellNumber + 1);
  const rightStartRowProcessed = rightStartRow < -2 ? 0 : rightStartRow;
  // console.log(rightStartRowProcessed);
  if (rightStartRowProcessed < 2 || leftStartRowProcessed > 0) {
    return true;
  } else {
    return false;
  }
}
function leftTopRightBottom(board, winnerCellNumber, lastRow, lastColumn) {
  const leftStartRow = lastRow - (winnerCellNumber - 1);
  const leftStartRowProcessed = leftStartRow < 0 ? 0 : leftStartRow;
  // console.log(leftStartRowProcessed);
  const rightStartRow = lastRow - (winnerCellNumber - 1);
  const rightStartRowProcessed = rightStartRow < -2 ? 0 : rightStartRow;
  //console.log(rightStartRowProcessed);
  if (rightStartRowProcessed > -3 || leftStartRowProcessed > 0) {
    return true;
  } else {
    return false;
  }
}

function Game() {
  // console.log(generateInitialBoard());

  const [board, setBoard] = useState(generateInitialBoard());
  const [step, setStep] = useState("X");

  return (
    <div className="App">
      <div className="board">
        {board.map((row, rowIndex) => {
          return (
            <div className="row">
              {row.map((xOrO, columnInd) => (
                <div
                  className="cell"
                  onClick={() => {
                    console.log(`Row: ${rowIndex}, Column: ${columnInd}`);

                    const newBoard = move(step, board, rowIndex, columnInd);
                    console.log(`Board after move:`, newBoard);
                    //  console.log("Winner? ${}");
                    const hasWinner = checkWinner(
                      step,
                      board,
                      rowIndex,
                      columnInd
                    );
                    if (hasWinner) {
                      // setWinner(...)
                    }

                    setBoard(newBoard);
                    setStep(step === "X" ? "O" : "X");
                  }}
                >
                  {xOrO}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;

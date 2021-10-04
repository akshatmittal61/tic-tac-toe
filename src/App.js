import React, { useState } from 'react'
import './App.css'

const App = () => {
  const allCells = Array(9).fill(0);
  const [cells, setCells] = useState(allCells);
  const [turn, setTurn] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const winningState = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const handleClick = (id) => {
    if (cells[id] !== 0) {
      return;
    }
    const newState = [...cells];
    newState[id] = turn;
    setCells(newState);
    setTurn(turn === 1 ? 2 : 1);
    setIsGameOver(
      winningState.some((winningSet) => {
        console.log(winningSet);
        return winningSet.every((indices) => newState[indices] === turn)
      })
    )
  }
  const getClassName = (id) => {
    if (id === 0) {
      return;
    }
    else if (id === 1) {
      return 'cross';
    }
    else if (id === 2) {
      return 'circle';
    }
  }
  return (
    <div className="wrapper">
      {
        !isGameOver ?
          <div className="grid">
            {
              allCells.map((cell, index) => (
                <div key={index} className="cell" onClick={() => handleClick(index)}>
                  <div className={getClassName(cells[index])}></div>
                </div>
              ))
            }
          </div> :
          <div className="game-over">
            <div className="game-over-box">
              <div className="game-over-text">Game Over</div>
              <div className="game-over-result">{`${turn === 1 ? "circle" : "cross"} wins`}</div>
            </div>
          </div>
      }
    </div>
  )
}

export default App

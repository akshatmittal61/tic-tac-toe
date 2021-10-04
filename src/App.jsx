import React, { useState } from 'react'
import CircleImage from "./images/circle.png"
import CrossImage from "./images/cross.png"
import TickImage from "./images/Tick.svg"
import './App.css'

const App = () => {
  const [playGame, setPlayGame] = useState(false);
  const allCells = Array(9).fill(0);
  const [cells, setCells] = useState(allCells);
  const [turn, setTurn] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [tick1, setTick1] = useState(false);
  const [tick2, setTick2] = useState(true);
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
  const startGame = (e) => {
    e.preventDefault();
    setPlayGame(true);
  }
  const setPlayer = (a) => {
    setTurn(a);
    if (a === 1) {
      setTick1(false);
      setTick2(true);
    }
    else if (a === 2) {
      setTick1(true);
      setTick2(false);
    }
  }
  const restartGame = () => {
    setPlayGame(false);
    setIsGameOver(false);
    setCells(allCells);
    setTurn(1);
  }
  return (
    <div className="wrapper">
      <div className="game-frame">
        <div className="game-box">
          {
            playGame ?
              (
                !isGameOver ?
                  (
                    <div className="grid">
                      {
                        allCells.map((cell, index) => (
                          <div key={index} className="cell" onClick={() => handleClick(index)}>
                            <div className={getClassName(cells[index])}></div>
                          </div>
                        ))
                      }
                    </div>
                  ) :
                  (
                    <>
                      <div className="game-over-text">Game Over</div>
                      <div className="game-over-result">{`${turn === 1 ? "circle" : "cross"} wins`}</div>
                      <button className="game-over-retry btn" onClick={restartGame}>Restart Game</button>
                    </>
                  )
              ) :
              (
                <form className="game-form" onSubmit={startGame}>
                  <div className="game-form-content">
                    <div className="game-form-title">Player 1 </div>
                    <div className="game-form-groups">
                      <div className="game-form-group" onClick={() => { setPlayer(2) }}>
                        <div className="game-form-tick">
                          <img className="game-form-tick-image" src={TickImage} alt="tick" style={{ opacity: tick1 ? 1 : 0 }} />
                        </div>
                        <div className="game-form-label">Circle </div>
                        <img className="game-form-image" src={CircleImage} alt="Circle" />
                      </div>
                      <div className="game-form-group" onClick={() => { setPlayer(1) }}>
                        <div className="game-form-tick">
                          <img className="game-form-tick-image" src={TickImage} alt="tick" style={{ opacity: tick2 ? 1 : 0 }} />
                        </div>
                        <div className="game-form-label">Cross </div>
                        <img className="game-form-image" src={CrossImage} alt="Cross" />
                      </div>
                    </div>
                  </div>
                  <div className="game-form-button">
                    <button className="game-start btn" type="submit">Start game</button>
                  </div>
                </form>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default App

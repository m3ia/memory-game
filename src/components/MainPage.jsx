import React, { useState } from "react";
// import { useSpring, animated as a } from '@react-spring/web'
import Game from './Game.jsx'

const MainPage = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className="container">
        <h1>Memory Game</h1>
        <Game
          setScore={setScore}
        />
        <div className="highScore">Score: {score}</div>
      </div>
    </div>
  );
}

export default MainPage;
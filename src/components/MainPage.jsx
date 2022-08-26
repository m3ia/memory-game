import React, { useState, useEffect } from "react";
// import { useSpring, animated as a } from '@react-spring/web'
import Game from './Game.jsx'

const MainPage = () => {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {

  }, []);

  return (
    <div>
      <div className="container">
        <h1>Memory Game</h1>
        <Game
          highScore={highScore}
          setHighScore={setHighScore}
        />
        Hey there
        <div className="highScore">High Score: {highScore}</div>
      </div>
    </div>
  );
}

export default MainPage;
import React, { useState, useEffect } from "react";
import imgA from '../images/a.jpg';
import imgB from '../images/b.jpg';
import imgC from '../images/c.jpg';
import imgD from '../images/d.jpg';
import imgE from '../images/e.jpg';
import imgF from '../images/f.jpg';
import imgG from '../images/g.jpg';
import imgH from '../images/h.jpg';
import imgI from '../images/i.jpg';
import imgJ from '../images/j.jpg';
import imgK from '../images/k.jpg';
import imgL from '../images/l.jpg';
import Card from './Card';

const photos = [
  imgA,
  imgB,
  imgC,
  imgD,
  imgE,
  imgF,
  imgG,
  imgH,
  imgI,
  imgJ,
  imgK,
  imgL,
]

const createNewGame = () => {
  const newGame = [];
  let maxLength = 6;
  let i = 0;
  while (i < maxLength) {
    let randInd = Math.floor(Math.random() * 12);
    function indChecker (randInd) {
      return randInd = Math.floor(Math.random() * 12);
    }
    if (newGame.includes(randInd)) {
      indChecker();
    } else {
      newGame.push(randInd);
      newGame.push(randInd);
      i++;
    }
  }
  newGame.sort((a, b) => 0.5 - Math.random());
  return newGame;
}

const Game = () => {
  const [game, setGame] = useState([]);
  console.log('hi', game);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  console.log("rendering game");
  useEffect(() => {
    setGame(createNewGame());
    console.log('hi');
  }, [])
  return (
    <div className="game">
      {game.map((elem, index) => (
          <Card
            pic={elem}
            key={index}
            flippedCount={flippedCount}
            setFlippedCount={setFlippedCount}
            flippedIndexes={flippedIndexes}
            setFlippedIndexes={setFlippedIndexes}
            index={index}
          />
        ))}
    </div>
  );
}

export default Game;
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

const Game = ({setScore}) => {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  const clickPic = (gameInd) => {
    setFlippedIndexes([...flippedIndexes, gameInd]);
    setFlippedCount(flippedCount + 1);
    }
  console.log('flipped indexes:', flippedIndexes);  
  useEffect(() => {
    setGame(createNewGame());
  }, [])

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      setTimeout(() => {
        if (flippedIndexes.length >= 2) {
          let choice1 = flippedIndexes[flippedIndexes.length - 2];
          let choice2 = flippedIndexes[flippedIndexes.length - 1];
          if (game[choice1] === game[choice2]) {
            setMatchedIndexes((m) => [...m, choice1, choice2])
            setScore((s) => s + 1);
          }
          setFlippedIndexes([]);
          setFlippedCount(0);
        }
      }, 500);
    }
  }, [game, setScore, flippedIndexes])
  
  return (
    <div className="game">
      {game.map((photoInd, gameInd) => (
          <Card
            pic={photos[photoInd]}
            key={gameInd}
            flippedCount={flippedCount}
            setFlippedCount={setFlippedCount}
            flippedIndexes={flippedIndexes}
            setFlippedIndexes={setFlippedIndexes}
            photoInd={photoInd}
            flipped={matchedIndexes.includes(gameInd) || flippedIndexes.includes(gameInd)}
            onClick={() => clickPic(gameInd)}
          />
        ))}
    </div>
  );
}

export default Game;
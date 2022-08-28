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

// Creates an array of indices for 6 randomly picked photos on each new game
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
  // Represents # of cards currently flipped
  const [flippedCount, setFlippedCount] = useState(0);
  // Represents an array of currently flipped photos' index in game[] (or "game indexes")
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  // Represents the game indexes of matched photos
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  // Click handler for reset button
  const resetGame = () => {
    setFlippedCount(0);
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setGame(createNewGame());
  }

  // Click handler for flipping a picture
  const clickPic = (gameInd) => {
    setFlippedIndexes([...flippedIndexes, gameInd]);
    setFlippedCount(flippedCount + 1);
  }
  
  // Creates a new game only on the first render
  useEffect(() => {
    setGame(createNewGame());
  }, [])

  // Checks 
  useEffect(() => {
    // Any time game, setScore, or flippedIndexes is updated, checks if 2 cards are flipped
    if (flippedIndexes.length === 2) {
      // After 2 cards have been flipped, in the next .5 seconds:
      setTimeout(() => {
        // Represents index for first flipped card
        let choice1 = flippedIndexes[flippedIndexes.length - 2];
        // Represents index for second flipped card
        let choice2 = flippedIndexes[flippedIndexes.length - 1];
        // If we find a match, update matchedIndexes and score
        if (game[choice1] === game[choice2]) {
          setMatchedIndexes((m) => [...m, choice1, choice2])
          setScore((s) => s + 1);
        }

        // Whether we find a match or not, reset flippedIndexes array and flippedCount (this determines if the cards will be flipped back or not)
        setFlippedIndexes([]);
        setFlippedCount(0);
      }, 500);
    }
  }, [game, setScore, flippedIndexes])
  
  return (
    <>
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
      <div className="resetBtn"><button onClick={resetGame}>Reset</button></div>
  </>
  );
}

export default Game;
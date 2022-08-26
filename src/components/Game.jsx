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
const Game = (props) => {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

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

  // Individual Img Click Handler
  //  const clickPic = (index) => {
  //   // If card isn't flipped, then add index to flippedIndexes
  //   if (!flippedIndexes.includes(index)) {
  //     setFlippedIndexes([...flippedIndexes, index]);
  //     // Update photo
  //     setPic(photos[index]);
  //     setFlippedCount(flippedCount++);
  //   }
  // }
  // // Load Game
  // useEffect(() => {

  // })

  // useEffect(() => {

  // }, [game]) 

  // if (flippedIndexes.length === 2) {

  // }
  console.log("rendering game");
  return (
    <div className="game">
        {photos.map((elem, index) => (
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
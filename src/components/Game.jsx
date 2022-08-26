import React, { useState, useEffect } from "react";
import Card from './Card';
const Game = (props) => {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const photos = [
    '../images/a.jpg',
    '../images/b.jpg',
    '../images/c.jpg',
    '../images/d.jpg',
    '../images/e.jpg',
    '../images/f.jpg',
    '../images/g.jpg',
    '../images/h.jpg',
    '../images/i.jpg',
    '../images/j.jpg',
    '../images/k.jpg',
    '../images/l.jpg',
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
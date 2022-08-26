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

  // // Load Game
  // useEffect(() => {

  // })

  // useEffect(() => {

  // }, [game]) 

  // if (flippedIndexes.length === 2) {

  // }

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
          />
        ))}
    </div>
  );
}

export default Game;
import React, { useState, useEffect } from "react";
import logo from '../images/logo-img.png'


const Card = ({pic, flippedIndexes, setFlippedIndexes, index, flippedCount, setFlippedCount}) => {
  const [img, setImg] = useState(logo);

  const clickPic = () => {
    // If card isn't flipped, then add index to flippedIndexes
    if (!flippedIndexes.includes(index)) {
      setFlippedIndexes([...flippedIndexes, index]);
      // Update photo
      setImg(pic);
      setFlippedCount(flippedCount++);
    }
    console.log(flippedIndexes);
  }

    return (
      <div
        className="card"
        onClick={clickPic}
      >
        <img src={img} alt={pic} />
    </div >
    );
}

export default Card;
import React, { useState, useEffect } from "react";
import logo from '../images/logo-img.png'


const Card = (props) => {
  const [pic, setPic] = useState(logo);

  const clickPic = () => {
    // If card isn't flipped, then add index to flippedIndexes
    if (!props.flippedIndexes.includes(props.index)) {
      props.setFlippedIndexes([...props.flippedIndexes, props.index]);
      // Update photo
      setPic(props.pic);
      props.setFlippedCount(props.flippedCount++);
    }
  }

    return (
      <div
        className="card"
        onClick={clickPic}
      >
        <img src={pic} alt={props.pic} style={{width: 200}} />
    </div >
    );
}

export default Card;
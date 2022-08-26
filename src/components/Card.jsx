import React, { useState, useEffect } from "react";
import logo from '../images/logo-img.png'
import imgA from '../images/a.jpg'


const Card = (props) => {
  const [pic, setPic] = useState(logo);
  console.log("rendering card", props.index);
  const clickPic = () => {
    // If card isn't flipped, then add index to flippedIndexes
    if (!props.flippedIndexes.includes(props.index)) {
      props.setFlippedIndexes([...props.flippedIndexes, props.index]);
      // Update photo
      setPic(imgA);
      props.setFlippedCount(props.flippedCount++);
    }
    console.log(props.flippedIndexes);
  }

    return (
      <div
        className="card"
        onClick={clickPic}
      >
        <img src={pic} alt={props.pic} style={{width: 200, margin: 10 }} />
    </div >
    );
}

export default Card;
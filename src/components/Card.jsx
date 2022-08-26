import React, { useState, useEffect } from "react";
import logo from '../images/logo-img.png'


const Card = ({pic, flippedIndexes, setFlippedIndexes, photoInd, flippedCount, setFlippedCount, flipped, onClick}) => {

    return (
      <div
        className="card"
        onClick={onClick}
      >
        <img src={flipped ? pic : logo} alt={pic} />
    </div >
    );
}

export default Card;
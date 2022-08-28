import logo from '../images/logo-img.png'


const Card = ({pic, flipped, onClick}) => {

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
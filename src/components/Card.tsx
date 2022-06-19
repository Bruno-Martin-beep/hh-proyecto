import "./Card.scss"
import imagen from "../assets/image.jpg";
import iconHome from "../assets/icon-home.svg";
import iconCard from "../assets/icon-card.svg";

const Card = () => {
  return (
    <div className="card">
      <img src={imagen} alt="persona sonriendo" />
      <img src={iconHome} alt="" className="card-icon-home"/>
      <div className="card-info">
        <h3>lorem ipsum dolor</h3>
        <p className="card-text">
          Quis mollis nisl nunc et massa vestibulum sed metus in lorem tristique
        </p>
        <div className="card-item">
          <img src={iconCard} alt="" />
          <p>Lorem ipsum dolo sit ultrice</p>
        </div>
        <div className="card-item">
          <img src={iconCard} alt="" />
          <p>Lorem ipsum dolo sit ultrice</p>
        </div>
        <button type="button" className="card-button">lo quiero ya</button>
      </div>
    </div>
  );
};

export default Card;

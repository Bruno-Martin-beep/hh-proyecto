import imagen from "../assets/image.jpg";
import iconHome from "../assets/icon-home.svg";
import iconCard from "../assets/icon-card.svg";

const Card = () => {
  return (
    <div>
      <img src={imagen} alt="persona sonriendo" />
      <img src={iconHome} alt="" />
      <div>
        <h3>lorem ipsum dolor</h3>
        <p>
          Quis mollis nisl nunc et massa vestibulum sed metus in lorem tristique
        </p>
        <div>
          <img src={iconCard} alt="" />
          <p>Lorem ipsum dolo sit ultrice</p>
        </div>
        <div>
          <img src={iconCard} alt="" />
          <p>Lorem ipsum dolo sit ultrice</p>
        </div>
        <button type="button">lo quiero ya</button>
      </div>
    </div>
  );
};

export default Card;

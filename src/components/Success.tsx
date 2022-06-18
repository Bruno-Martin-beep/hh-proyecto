import iconSuccess from "../assets/icon-success.svg";

interface Props {
  resetState: Function;
}

const Success = ({ resetState }: Props) => {
  const handleClick = () => {
    resetState()
  };

  return (
    <div>
      <img src={iconSuccess} alt="" />
      <h2>Gracias por completar nuestro formulario.</h2>
      <button type="button" onClick={() => handleClick()}>
        volver
      </button>
    </div>
  );
};

export default Success;

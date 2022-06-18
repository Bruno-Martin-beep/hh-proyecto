import iconSuccess from "../assets/icon-success.svg";

interface Props {
  setStep: Function;
}

const Success = ({ setStep }: Props) => {
  const handleClick = () => {
    setStep("step 1");
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

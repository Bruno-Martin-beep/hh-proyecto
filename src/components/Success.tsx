import { Dispatch } from "react";
import "./Success.scss";
import { Step } from "../App";
import iconSuccess from "../assets/icon-success.svg";

interface Props {
  setStep: Dispatch<Step>;
}

const Success = ({ setStep }: Props) => {
  const handleClick = () => {
    setStep("step 1");
  };

  return (
    <>
      <img src={iconSuccess} alt="" className="icon-success" />
      <h2 className="success-text">
        Gracias por completar nuestro formulario.
      </h2>
      <button
        type="button"
        className="submit-button"
        onClick={() => handleClick()}
      >
        volver
      </button>
    </>
  );
};

export default Success;

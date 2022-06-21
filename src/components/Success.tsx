import { Dispatch } from "react";
import "./Success.scss";
import { Step } from "../App";

interface Props {
  setStep: Dispatch<Step>;
}

const Success = ({ setStep }: Props) => {
  const handleClick = () => {
    setStep("step 1");
  };

  return (
    <>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="icon-success-svg"
      >
        <path
          d="M16.02 32c2.21 0 4.274-.42 6.195-1.263 1.946-.841 3.643-1.986 5.09-3.432 1.446-1.447 2.59-3.144 3.432-5.09C31.58 20.295 32 18.229 32 16.02c0-2.21-.42-4.288-1.263-6.235-.841-1.946-1.986-3.643-3.432-5.09-1.447-1.446-3.144-2.59-5.09-3.432C20.295.42 18.229 0 16.02 0c-2.21 0-4.288.42-6.235 1.263-1.946.841-3.643 1.986-5.09 3.432-1.446 1.447-2.59 3.144-3.432 5.09C.42 11.732 0 13.81 0 16.02s.42 4.274 1.263 6.195c.841 1.946 1.986 3.643 3.432 5.09 1.447 1.446 3.144 2.59 5.09 3.432C11.732 31.58 13.81 32 16.02 32z"
          fill="url(#paint0_linear)"
        />
        <path
          className="icon-success-path"
          d="M9.12 15.904l4.054 4.864 10.538-9.728"
          stroke="#fff"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="25.067"
            y1="28.8"
            x2="5.867"
            y2="3.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7500" />
            <stop offset="1" stop-color="#FD9D00" />
          </linearGradient>
        </defs>
      </svg>
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

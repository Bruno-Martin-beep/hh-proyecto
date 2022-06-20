import { Dispatch, useState } from "react";
import "./OptionsSelector.scss";
import classNames from "classnames";
import { Option, OptionValue } from "../utils/fetchData";
import { Step } from "../App";
import iconChevronRight from "../assets/icon-chevron-right.svg";

interface Props {
  options: Option[];
  setOptionSelected: Dispatch<OptionValue>;
  setStep: Dispatch<Step>;
}

const OptionsSelector = ({ options, setOptionSelected, setStep }: Props) => {
  const [currentOption, setCurrentOption] = useState<OptionValue | null>(null);

  const handleOption = (value: OptionValue) => {
    if (currentOption === value) {
      setCurrentOption(null);
      return;
    }
    setCurrentOption(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentOption) {
      setOptionSelected(currentOption);
      setStep("step 2");
    }
  };

  return (
    <>
      <h2 className="options-text">Para comenzar seleccioná una de las siguientes opciones.</h2>
      <form onSubmit={(event) => handleSubmit(event)} className="options-form">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={classNames("option", {
              active: currentOption === option.value,
            })}
            onClick={() => handleOption(option.value)}
          >
            <img
              src={option.image}
              alt={`opcion ${option.value}`}
              className="option-image"
            />
            <p className="option-text">{option.label}</p>
            <img src={iconChevronRight} alt="" />
          </button>
        ))}
        <button type="submit" className="submit-button">siguiente</button>
      </form>
    </>
  );
};

export default OptionsSelector;

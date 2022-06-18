import { useState } from "react";
import classNames from "classnames";
import { Option, Value } from "../utils/fetchData";

interface Props {
  options: Option[];
  setOptionSelected: Function;
  setStep: Function;
}

const OptionsSelector = ({ options, setOptionSelected, setStep }: Props) => {
  const [currentOption, setCurrentOption] = useState<Value | null>(null);

  const handleOption = (value: Value) => {
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
    <form onSubmit={(event) => handleSubmit(event)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={classNames({ active: currentOption === option.value })}
          onClick={() => handleOption(option.value)}
        >
          {option.label}
        </button>
      ))}
      <button type="submit">siguiente</button>
    </form>
  );
};

export default OptionsSelector;

import { useState } from "react";
import classNames from "classnames";
import { Option, Value } from "../utils/fetchData";

interface Props {
  options: Option[];
  addOption: Function;
}

const OptionsSelector = ({ options, addOption }: Props) => {
  const [currentOption, setCurrentOption] = useState<Value | "">("");

  const handleOption = (value: Value) => {
    if (currentOption === value) {
      setCurrentOption("");
      return;
    }
    setCurrentOption(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentOption) {
      addOption(currentOption);
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

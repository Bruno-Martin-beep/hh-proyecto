import { useEffect, useState } from "react";
import "./App.css";
import OptionsSelector from "./components/OptionsSelector";
import EmailForm from "./components/EmailForm";
import Success from "./components/Success";
import { get, Option, Value } from "./utils/fetchData";
// import Card from "./components/Card";

export interface State {
  optionSelected: Value | "";
  isSuccess: Boolean;
}

function App() {
  const [state, setState] = useState<State>({
    optionSelected: "",
    isSuccess: false,
  });

  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    get()
      .then((data) => setOptions(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const addOption = (option: Value) => {
    setState((prev: State) => {
      return { ...prev, optionSelected: option };
    });
  };

  const EmailSuccess = () => {
    setState((prev: State) => {
      return { ...prev, isSuccess: true };
    });
  };

  const resetState = () => {
    setState({
      optionSelected: "",
      isSuccess: false,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {!state.optionSelected && (
          <OptionsSelector options={options} addOption={addOption} />
        )}
        {state.optionSelected && !state.isSuccess && (
          <EmailForm
            optionSelected={state.optionSelected}
            EmailSuccess={EmailSuccess}
          />
        )}
        {state.isSuccess && <Success resetState={resetState} />}
        {/* <Card /> */}
      </header>
    </div>
  );
}

export default App;

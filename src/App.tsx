import { useState } from "react";
import "./App.css";
import OptionsSelector from "./components/OptionsSelector";
import EmailForm from "./components/EmailForm";
import Success from "./components/Success";
import { Value } from "./utils/fetchData";
import useOptions from "./hooks/useOptions";
// import Card from "./components/Card";

type Pasos = "step 1" | "step 2" | "success";

function App() {
  const [step, setStep] = useState<Pasos>("step 1");
  const [optionSelected, setOptionSelected] = useState<Value | null>(null);

  const options = useOptions();

  return (
    <div className="App">
      <header className="App-header">
        {step === "step 1" && (
          <OptionsSelector
            options={options}
            setOptionSelected={setOptionSelected}
            setStep={setStep}
          />
        )}
        {step === "step 2" && optionSelected && (
          <EmailForm optionSelected={optionSelected} setStep={setStep} />
        )}
        {step === "success" && <Success setStep={setStep} />}
        {/* <Card /> */}
      </header>
    </div>
  );
}

export default App;

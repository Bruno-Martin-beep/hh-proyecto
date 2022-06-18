import React, { useState } from "react";
import { emailRegex } from "../utils/emailRegex";
import { postData, Value } from "../utils/fetchData";

interface Props {
  optionSelected: Value;
  setStep: Function;
}

const EmailForm = ({ optionSelected, setStep }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailRegex.test(email)) {
      setShowError(false);

      postData({ email: email, option: optionSelected }).then((data) => {
        if (data.error) {
          setShowError(true);
        } else {
          setStep("success");
        }
      });
    } else {
      setShowError(true);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Correo electrónico
        <input
          type="text"
          value={email}
          onChange={(event) => handleEmail(event)}
        />
        {showError && <p>error</p>}
      </label>
      <button type="submit">siguiente</button>
    </form>
  );
};

export default EmailForm;

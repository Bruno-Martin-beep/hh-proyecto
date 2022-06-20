import React, { Dispatch, useState } from "react";
import "./EmailForm.scss";
import { Step } from "../App";
import { emailRegex } from "../utils/emailRegex";
import { postData, OptionValue } from "../utils/fetchData";
import classNames from "classnames";

interface Props {
  optionSelected: OptionValue;
  setStep: Dispatch<Step>;
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
    <>
      <h2>Para terminar completá el siguiente formulario.</h2>
      <form onSubmit={(event) => handleSubmit(event)} className="email-form">
        <label className="email">
          <p className="email-text">Correo electrónico</p>
          <input
            type="text"
            placeholder="juan@example.com"
            value={email}
            className={classNames("email-input", {
              invalid: showError,
            })}
            onChange={(event) => handleEmail(event)}
          />
          {showError && <p className="email-error">Por favor, ingresá un correo electrónico válido.</p>}
        </label>
        <button type="submit" className="submit-button">enviar</button>
      </form>
    </>
  );
};

export default EmailForm;

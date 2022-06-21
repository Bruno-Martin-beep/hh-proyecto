import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailForm from "../components/EmailForm";
import { OptionValue } from "../utils/fetchData";

test("Display the EmailForm component", async () => {
  const optionSelected: OptionValue = "A";

  render(<EmailForm optionSelected={optionSelected} setStep={() => {}} />);

  const input = screen.getByRole("textbox");
  const textError = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  const submit = screen.getByText("enviar");

  expect(input).toBeVisible();
  expect(input).not.toHaveClass("invalid");
  expect(submit).toBeVisible();
  expect(textError).toBeNull();

  userEvent.type(input, "dino");
  userEvent.click(submit);

  expect(input).toHaveClass("invalid");

  const textError0 = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError0).toBeVisible();

  userEvent.clear(input);
  userEvent.click(submit);

  expect(input).toHaveClass("invalid");

  const textError1 = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError1).toBeVisible();

  userEvent.type(input, "dino@facha.com");
  userEvent.click(submit);

  expect(input).not.toHaveClass("invalid");

  const textError2 = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError2).toBeNull();
});

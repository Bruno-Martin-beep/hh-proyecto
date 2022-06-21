import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailForm from "../components/EmailForm";
import { OptionValue } from "../utils/fetchData";

test("when typing a correct email", async () => {
  const optionSelected: OptionValue = "A";

  render(<EmailForm optionSelected={optionSelected} setStep={() => {}} />);

  const input = screen.getByRole("textbox");
  const submit = screen.getByText("enviar");

  expect(input).toBeVisible();
  expect(input).not.toHaveClass("invalid");
  expect(submit).toBeVisible();

  userEvent.type(input, "dino@facha.com");
  userEvent.click(submit);

  expect(input).not.toHaveClass("invalid");

  const textError = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError).toBeNull();
});

test("when typing a wrong email", () => {
  const optionSelected: OptionValue = "B";

  render(<EmailForm optionSelected={optionSelected} setStep={() => {}} />);

  const input = screen.getByRole("textbox");
  const submit = screen.getByText("enviar");

  expect(input).toBeVisible();
  expect(input).not.toHaveClass("invalid");
  expect(submit).toBeVisible();

  userEvent.type(input, "dino");
  userEvent.click(submit);

  expect(input).toHaveClass("invalid");

  const textError = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError).toBeVisible();
}) 

test("when typing a empty email", () => {
  const optionSelected: OptionValue = "C";

  render(<EmailForm optionSelected={optionSelected} setStep={() => {}} />);

  const input = screen.getByRole("textbox");
  const submit = screen.getByText("enviar");

  expect(input).toBeVisible();
  expect(input).not.toHaveClass("invalid");
  expect(submit).toBeVisible();

  userEvent.click(submit);

  expect(input).toHaveClass("invalid");

  const textError = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError).toBeVisible();
}) 

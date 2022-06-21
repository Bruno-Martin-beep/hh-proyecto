import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders learn react link", async () => {
  render(<App />);

  const optionsButtons = await screen.findAllByTestId("option-button");

  userEvent.click(optionsButtons[1]);
  expect(optionsButtons[1]).toHaveClass("active");

  userEvent.click(optionsButtons[0]);
  expect(optionsButtons[0]).toHaveClass("active");

  const siguiente = screen.getByText("siguiente");
  expect(siguiente).toBeVisible();
  userEvent.click(siguiente);

  const input = screen.getByRole("textbox");
  expect(input).toBeVisible();
  userEvent.type(input, "dino");

  const submit = screen.getByText("enviar");
  userEvent.click(submit);

  const textError = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError).toBeVisible();

  userEvent.type(input, "dino@facha.com");
  userEvent.click(submit);

  const success = await screen.findByText(
    "Gracias por completar nuestro formulario."
  );
  expect(success).toBeVisible();

  const volver = await screen.findByText("volver");
  expect(volver).toBeVisible();
  userEvent.click(volver);

  const optionsButtons1 = await screen.findAllByTestId("option-button");

  expect(optionsButtons1[0]).toBeVisible();
});

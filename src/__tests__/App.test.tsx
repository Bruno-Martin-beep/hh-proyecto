import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/lib/node";
import App from "../App";
import { mockCorrectEmail, mockOptions } from "../utils/mock/fetchData";

const server = setupServer(mockOptions, mockCorrectEmail);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Rendering App", async () => {
  render(<App />);

  // selecting an option
  const optionsButtons = await screen.findAllByTestId("option-button");

  userEvent.click(optionsButtons[1]);
  expect(optionsButtons[1]).toHaveClass("active");

  userEvent.click(optionsButtons[0]);
  expect(optionsButtons[0]).toHaveClass("active");

  // confirm an option
  const siguiente = screen.getByText("siguiente");
  expect(siguiente).toBeVisible();
  userEvent.click(siguiente);

  // type a wrong email
  const input = screen.getByRole("textbox");
  expect(input).toBeVisible();
  userEvent.type(input, "dino");

  const submit = screen.getByText("enviar");
  userEvent.click(submit);

  const textError = screen.queryByText(
    "Por favor, ingresá un correo electrónico válido."
  );
  expect(textError).toBeVisible();

  // type a correct email
  userEvent.clear(input);
  userEvent.type(input, "dino@facha.com");
  userEvent.click(submit);

  // see success
  const success = await screen.findByText(
    "Gracias por completar nuestro formulario."
  );
  expect(success).toBeVisible();

  // click volver
  const volver = await screen.findByText("volver");
  expect(volver).toBeVisible();
  userEvent.click(volver);

  // see options
  const newOptionsButtons = await screen.findAllByTestId("option-button");
  expect(newOptionsButtons[0]).toBeVisible();
});

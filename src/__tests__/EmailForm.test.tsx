import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/lib/node";
import EmailForm from "../components/EmailForm";
import { mockCorrectEmail } from "../utils/mock/fetchData";

const server = setupServer(mockCorrectEmail);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test("when typing a correct email", async () => {
  render(<EmailForm optionSelected={"A"} setStep={() => {}} />);

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
  render(<EmailForm optionSelected={"B"} setStep={() => {}} />);

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
});


test("when typing a empty email", () => {
  render(<EmailForm optionSelected={"C"} setStep={() => {}} />);

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
});

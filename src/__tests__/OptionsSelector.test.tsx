import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OptionsSelector from "../components/OptionsSelector";
import { Option } from "../utils/fetchData";

const renderOptions = () => {
  const options: Option[] = [
    {
      value: "A",
      label: "Lorem ipsum",
      image: "https://api-demo-hh.vercel.app/images/option-a.jpg",
    },
    {
      value: "B",
      label: "Lorem ipsum dolo sit ultrice nunc et massa sed",
      image: "https://api-demo-hh.vercel.app/images/option-b.jpg",
    },
    {
      value: "C",
      label: "Quis mollis nisl",
      image: "https://api-demo-hh.vercel.app/images/option-c.jpg",
    },
  ];

  render(
    <OptionsSelector
      options={options}
      setOptionSelected={() => {}}
      setStep={() => {}}
    />
  );
};

test("When clicking options", () => {
  renderOptions();

  const optionsButtons = screen.getAllByTestId("option-button");

  expect(optionsButtons[0]).toBeVisible();
  expect(optionsButtons[1]).toBeVisible();
  expect(optionsButtons[2]).toBeVisible();

  expect(optionsButtons[0]).toHaveClass("option");
  expect(optionsButtons[1]).toHaveClass("option");
  expect(optionsButtons[2]).toHaveClass("option");

  expect(optionsButtons[0]).not.toHaveClass("active");
  expect(optionsButtons[1]).not.toHaveClass("active");
  expect(optionsButtons[2]).not.toHaveClass("active");

  userEvent.click(optionsButtons[0]);

  expect(optionsButtons[0]).toHaveClass("active");
  expect(optionsButtons[1]).not.toHaveClass("active");
  expect(optionsButtons[2]).not.toHaveClass("active");

  userEvent.click(optionsButtons[1]);

  expect(optionsButtons[0]).not.toHaveClass("active");
  expect(optionsButtons[1]).toHaveClass("active");
  expect(optionsButtons[2]).not.toHaveClass("active");

  userEvent.click(optionsButtons[2]);

  expect(optionsButtons[0]).not.toHaveClass("active");
  expect(optionsButtons[1]).not.toHaveClass("active");
  expect(optionsButtons[2]).toHaveClass("active");
});


test("When double-click option", () => {
  renderOptions();

  const optionsButtons = screen.getAllByTestId("option-button");

  expect(optionsButtons[0]).toBeVisible();
  expect(optionsButtons[1]).toBeVisible();
  expect(optionsButtons[2]).toBeVisible();

  expect(optionsButtons[0]).not.toHaveClass("active");
  expect(optionsButtons[1]).not.toHaveClass("active");
  expect(optionsButtons[2]).not.toHaveClass("active");

  userEvent.click(optionsButtons[2]);

  expect(optionsButtons[0]).not.toHaveClass("active");
  expect(optionsButtons[1]).not.toHaveClass("active");
  expect(optionsButtons[2]).toHaveClass("active");

  userEvent.click(optionsButtons[2]);

  expect(optionsButtons[0]).not.toHaveClass("active");
  expect(optionsButtons[1]).not.toHaveClass("active");
  expect(optionsButtons[2]).not.toHaveClass("active");
});

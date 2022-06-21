import { getData, Info, Option, postData, Response } from "../utils/fetchData";

test("Get info from api", async () => {
  const expectedValue: Option[] = [
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

  const actualValue = await getData();

  expect(actualValue).toBeDefined();
  expect(actualValue).toEqual(expectedValue);
});

test("Post info to api", async () => {
  const expectedCorrectValue: Response = { error: false, message: "Éxito." };
  const expectedWrongValue: Response = {
    error: true,
    message: "Formato de email inválido.",
  };
  const expectedEmptyValue: Response = {
    error: true,
    message: "Falta el email.",
  };

  const inputCorrect: Info = { email: "juan@example.com", option: "A" };
  const inputWrongEmail: Info = { email: "@examplecom", option: "B" };
  const inputEmptyEmail: Info = { email: "", option: "C" };

  const correctValue = await postData(inputCorrect);
  const wrongValue = await postData(inputWrongEmail);
  const emptyValue = await postData(inputEmptyEmail);

  expect(correctValue).toBeDefined();
  expect(correctValue).toEqual(expectedCorrectValue);

  expect(wrongValue).toBeDefined();
  expect(wrongValue).toEqual(expectedWrongValue);

  expect(emptyValue).toBeDefined();
  expect(emptyValue).toEqual(expectedEmptyValue);
});

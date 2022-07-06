import { setupServer } from "msw/node";
import { getData, Info, Option, postData, Response } from "../utils/fetchData";
import {
  mockCorrectEmail,
  mockEmptyEmail,
  mockOptions,
  mockWrongEmail,
} from "../utils/mock/fetchData";

const server = setupServer(mockOptions, mockCorrectEmail);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

test("post a correct mail", async () => {
  const expectedCorrectValue: Response = { error: false, message: "Éxito." };

  const inputCorrect: Info = { email: "juan@example.com", option: "A" };

  const correctValue = await postData(inputCorrect);

  expect(correctValue).toBeDefined();
  expect(correctValue).toEqual(expectedCorrectValue);
});

test("post a wrong mail", async () => {
  server.use(mockWrongEmail);

  const expectedWrongValue: Response = {
    error: true,
    message: "Formato de email inválido.",
  };

  const inputWrongEmail: Info = { email: "@examplecom", option: "B" };

  const wrongValue = await postData(inputWrongEmail);

  expect(wrongValue).toBeDefined();
  expect(wrongValue).toEqual(expectedWrongValue);
});

test("post a empty mail", async () => {
  server.use(mockEmptyEmail);

  const expectedEmptyValue: Response = {
    error: true,
    message: "Falta el email.",
  };

  const inputEmptyEmail: Info = { email: "", option: "C" };

  const emptyValue = await postData(inputEmptyEmail);

  expect(emptyValue).toBeDefined();
  expect(emptyValue).toEqual(expectedEmptyValue);
});

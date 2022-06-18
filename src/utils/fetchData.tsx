
export type Value = "A" | "B" | "C";

export interface Option {
  value: Value;
  label: string;
  image: string;
}

export const getData = async (): Promise<Option[]> => {
  const URL_GET = "https://api-demo-hh.vercel.app/api/options";

  const data = await fetch(URL_GET)
    .then((response) => response.json())

    .catch((error) => {
      console.error("Error:", error);
    });

  return data;
};

interface Info {
  email: string;
  option: Value;
}

export interface Response {
  error: boolean;
  message: string;
}

export const postData = async (info: Info): Promise<Response> => {
  const URL_POST_BASE = `https://api-demo-hh.vercel.app/api/send?email=${info.email}&option=${info.option}`;

  const data = fetch(URL_POST_BASE, {
    method: "POST",
  })
    .then((response) => response.json())

    .catch((error) => {
      console.error("Error:", error);
    });

  return data;
};

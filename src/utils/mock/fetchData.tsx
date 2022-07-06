import { rest } from "msw";

export const mockOptions = rest.get(
  "https://api-demo-hh.vercel.app/api/options",
  (req, res, ctx) => {
    return res(
      ctx.json([
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
      ])
    );
  }
);

export const mockCorrectEmail = rest.post(
  "https://api-demo-hh.vercel.app/api/send",
  (req, res, ctx) => {
    return res(ctx.json({ error: false, message: "Éxito." }));
  }
);

export const mockWrongEmail = rest.post(
  "https://api-demo-hh.vercel.app/api/send",
  (req, res, ctx) => {
    return res(
      ctx.json({
        error: true,
        message: "Formato de email inválido.",
      })
    );
  }
);

export const mockEmptyEmail = rest.post(
  "https://api-demo-hh.vercel.app/api/send",
  (req, res, ctx) => {
    return res(
      ctx.json({
        error: true,
        message: "Falta el email.",
      })
    );
  }
);

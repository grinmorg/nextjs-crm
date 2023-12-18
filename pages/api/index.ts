// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const completionConfig = {
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'i can use open ai in client side app?',
    max_tokens: 256,
    temperature: 0,
    stream: false,
  }

  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(completionConfig),
  })

  console.log(response)

  res.status(200).json({ message: JSON.stringify(response) });
}

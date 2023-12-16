// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type Data = {
  message: string | undefined;
};

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const completion = await openai.chat.completions.create({ messages: [{ role: 'user', content: 'How can I get the name of the current day in Node.js?' }], model: 'gpt-3.5-turbo' }, {
    maxRetries: 5,
  });

  res.status(200).json({ message: JSON.stringify(completion.choices[0]) });
}

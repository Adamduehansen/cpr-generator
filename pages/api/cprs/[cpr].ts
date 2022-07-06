// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateCprs } from './cpr';

interface Data {
  length: number;
  cprs: string[];
}

const handler = async function (
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  const cpr = request.query.cpr as string;

  const cprs = generateCprs(cpr);

  response.status(200).json({
    length: cprs.length,
    cprs: cprs,
  });
};

export default handler;

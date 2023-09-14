import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      password: "Alice",
    },
  });
}

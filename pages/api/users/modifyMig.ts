import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const updateUser = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      superUser: true,
    },
  });
  return res.send(updateUser);
}

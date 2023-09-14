import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hi");
  const updateUser = await prisma.user.update({
    where: {
      email: "mig@gmail.com",
    },
    data: {
      superUser: true,
    },
  });
  return res.send(updateUser);
}

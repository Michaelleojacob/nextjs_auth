import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: 2,
      },
      data: {
        superUser: true,
      },
    });
    return res
      .status(200)
      .send({ msg: "successfully changed superUser", updateUser });
  } catch (e) {
    return res.status(400).send(e);
  }
}

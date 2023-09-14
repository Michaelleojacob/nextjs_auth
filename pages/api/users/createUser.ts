import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const user = await prisma.user.create({
        data: {
          name: req.body.name,
          password: req.body.password,
        },
      });
      return res.status(200).send(user);
    } catch (e) {
      return res.status(400).send("no user created");
    }
  }
}

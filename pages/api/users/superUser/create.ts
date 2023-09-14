import prisma from "../../../../prisma/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "../../../bycrypt";
import "dotenv/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.MIGPASS) return;
  const noHash = process.env.MIGPASS;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(noHash, salt);

  const superUser = await prisma.user.create({
    data: {
      name: "Migs",
      password: hash,
    },
  });
  return res.send(superUser);
}

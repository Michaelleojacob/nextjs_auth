import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma";
import bcrypt from "../../../bycrypt";
import "dotenv/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.MIGPASS) return res.status(400).send("error creating mig");
  try {
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
  } catch (e) {
    return res.status(400).send(e);
  }
}

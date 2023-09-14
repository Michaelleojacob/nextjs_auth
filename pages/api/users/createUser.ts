import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";
import bcrypt from "../../bycrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const noHash = req.body.password;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(noHash, salt);

    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        password: hash,
      },
    });
    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send("no user created");
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";
import bcrypt from "../../bycrypt";
import validator from "validator";

// validate on front end for length

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const name = validator.trim(validator.escape(req.body.name));
    const password = validator.trim(validator.escape(req.body.password));
    const noHash = password;
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

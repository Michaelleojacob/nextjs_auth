import prisma from "../../prisma/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function deleteUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});
  return res.status(200).send("all data deleted.");
}

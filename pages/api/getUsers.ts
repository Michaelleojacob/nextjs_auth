import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("hi");
    const users = await prisma.user.findMany();
    console.log(users);
    return res.send(users);
  }
  console.log("idk");
  res.send("failed");
}

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deleteUsers() {
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});
}

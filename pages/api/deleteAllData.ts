import prisma from "../../prisma/prisma";

export default async function deleteUsers() {
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});
}

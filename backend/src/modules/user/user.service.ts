import { prisma } from "@/config/db"
import type { Prisma, User } from '@prisma/client';


export const getUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

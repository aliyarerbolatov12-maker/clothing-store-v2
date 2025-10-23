import type { Request, Response } from "express";

import { getUsers} from "@/modules/user/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
};


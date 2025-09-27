import type { Request, Response,NextFunction } from "express";
import { registerUserSchema } from "@shopco/shared";
import { registerUser } from "@/modules/auth/auth.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const parsed = registerUserSchema.parse(req.body);
    const user = await registerUser(parsed);
    res.status(201).json(user);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};


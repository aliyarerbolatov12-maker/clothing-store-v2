import { prisma } from "@/config/db";
import { registerUserSchema, type RegisterUserDto } from "@shopco/shared";
import { hashPassword ,verifyPassword} from "@/modules/auth/auth.utils";


export async function registerUser(data: RegisterUserDto) {
  const validatedData = registerUserSchema.parse(data);

  const existingUser = await getUserByEmail(validatedData.email);

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await hashPassword(validatedData.password);

  const newUser = await prisma.user.create({
    data: {
      userName: validatedData.username,
      gmail: validatedData.email,
      password: hashedPassword,
    },
  });

  return {
    id: newUser.id,
    username: newUser.userName,
    email: newUser.gmail,
    createdAt: newUser.createdAt,
  };
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      gmail: email,
    },
  });
}

export async function loginUser(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await verifyPassword(user.password, password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return {
    id: user.id,
    username: user.userName,
    email: user.gmail,
    createdAt: user.createdAt,
  };
}
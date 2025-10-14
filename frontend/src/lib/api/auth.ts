import api from "./axios";
import { RegisterUserDto } from "@shopco/shared/schemas/auth";

export const registerUser = async (data: RegisterUserDto) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

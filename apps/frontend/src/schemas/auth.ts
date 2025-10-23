import { z } from "zod";

export const registerUserSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine(
      (val) =>
        /[A-Z]/.test(val) &&     
        /[a-z]/.test(val) &&     
        /[0-9]/.test(val) &&    
        /[^A-Za-z0-9]/.test(val), 
      {
        message:
          "Password must include at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      }
    ),
});

export type RegisterUserDto = z.infer<typeof registerUserSchema>;

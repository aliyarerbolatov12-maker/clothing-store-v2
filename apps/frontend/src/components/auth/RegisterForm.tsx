"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { registerUserSchema, RegisterUserDto } from "@/schemas/auth";

import TextInput from "@/components/formUI/TextInput";
import Button from "@/components/formUI/Button";

import { registerUser } from "@/lib/api/auth";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterUserDto>({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = async (data: RegisterUserDto) => {
    try {
      const json = await registerUser(data);
      console.log("Registered:", json);
    } catch (err: any) {
      console.error("Error:", err.response?.data?.message || err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        placeholder="Username"
        {...register("username")}
        error={errors.username?.message}
      />
      <TextInput
        type="email"
        placeholder="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <TextInput
        type="password"
        placeholder="Password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Registering..." : "Create Account"}
      </Button>
      <Button type="button" variant="secondary">
        Sign up with Google
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-black font-medium hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}

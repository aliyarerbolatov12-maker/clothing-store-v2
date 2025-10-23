"use client";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Create an account</h1>
      <RegisterForm />;
    </div>
  );
}

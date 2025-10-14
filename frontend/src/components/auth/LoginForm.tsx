import TextInput from "@/components/formUI/TextInput";
import Button from "@/components/formUI/Button";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <TextInput type="email" name="email" placeholder="Email" required />
      <TextInput
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <Button type="submit">Log in</Button>
      <Button type="button" variant="secondary">
        Log in with Google
      </Button>

      <p className="text-center">
        <Link
          href="/forgot"
          className="text-black text-center font-medium hover:underline"
        >
          Forgot password?
        </Link>
      </p>
    </form>
  );
}

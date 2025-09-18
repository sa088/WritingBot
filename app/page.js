"use client";
import { useRouter } from "next/navigation";
import TwoSideLayout from "../components/layouts/TwoSideLayout/TwoSideLayout";
import LoginForm from "../components/forms/LoginForm/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (formData) => {
    try {
      // TODO: Integrate with authentication API
      console.log("Login data:", formData);

      // Simulate API call
      setTimeout(() => {
        router.push("/assignment-details");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <TwoSideLayout
      title="Login"
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    >
      <LoginForm onSubmit={handleLogin} />
    </TwoSideLayout>
  );
}
